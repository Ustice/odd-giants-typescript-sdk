type AwaitedProperties<T extends object> = {
  [K in keyof T]: Awaited<T[K]>
}

type HasPromiseLikeProperties<
  T extends object,
  K extends keyof T = keyof T,
> = T[K] extends Promise<any> ? true : false // eslint-disable-line @typescript-eslint/no-explicit-any

type HookReturn<T extends object> = HasPromiseLikeProperties<T> extends true
  ? Promise<AwaitedProperties<T>>
  : AwaitedProperties<T>

type Hook = (fn: () => void) => void
type ContextOf<T> = {
  context: T
}

function isPromiseLike<T>(input: T | PromiseLike<T>): input is PromiseLike<T> {
  return (
    input &&
    typeof input === 'object' &&
    'then' in input &&
    typeof input.then === 'function'
  )
}

function hasPromiseLikeProperties<T extends object>(
  input: T | PromiseLike<T>,
): input is PromiseLike<T> {
  return Object.values(input).some(isPromiseLike)
}

/**
 * # awaitProperties
 *
 * Takes an object with properties that may be promises and returns a promise
 * which once all on the properties in the original object have been resolved,
 * returns an object with the same properties but with the resolved values.
 */
async function awaitProperties<
  T extends object,
  K extends keyof T,
  P extends T[K],
>(input: T): Promise<AwaitedProperties<T>> {
  const inputObject = await input
  type KeyPropPair = [K, P]
  const entries: KeyPropPair[] = Object.entries(inputObject) as KeyPropPair[]
  const awaitedProperties = entries.map(
    async ([name, promise]) => [name, await promise] satisfies [K, P],
  )
  const allAwaitedProperties = await Promise.all(awaitedProperties)
  return Object.fromEntries(allAwaitedProperties) as AwaitedProperties<T>
}

export function wrapHook(hook: Hook) {
  function wrappedHook<T extends object>(
    setupFunction: () => PromiseLike<T>,
  ): ContextOf<T>
  function wrappedHook<T extends object>(
    setupFunction: () => T,
  ): ContextOf<AwaitedProperties<T>>
  function wrappedHook<
    T extends object,
    Fn extends () => T extends Promise<object> ? Awaited<T> : T,
    R extends HookReturn<Awaited<T>>,
  >(setupFunction: Fn): ContextOf<R> {
    let context: R
    hook(async () => {
      const result = setupFunction() ?? {}

      context = (await awaitProperties(result)) as R
      return context
    })

    return {
      get context() {
        return context
      },
    }
  }

  const wrapped = Object.defineProperty(wrappedHook, 'name', {
    value: wrappedHook,
    writable: false,
  })

  return wrapped
}
