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
  console.log(`Wrapping hook ${hook.name}`)

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
    console.log(`Before hook ${hook.name}`)
    hook(async () => {
      console.log(`~~~ Triggered: ${hook.name}`)
      const result = setupFunction() ?? {}

      console.log(`~~~ Result: ${hook.name}`, result)

      context = (await awaitProperties(result)) as R
      return context
    })

    console.log(`After hook ${hook.name}`)

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
