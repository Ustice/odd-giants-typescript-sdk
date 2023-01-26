type AwaitedProperties<T extends object> = {
  [K in keyof T]: Awaited<T[K]>
}

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

/**
 * # awaitProperties
 *
 * Takes an object with properties that may be promises and returns a promise
 * which once all on the properties in the original object have been resolved,
 * returns an object with the same properties but with the resolved values.
 */
function awaitProperties<T extends object, Input extends PromiseLike<T>>(
  input: Input,
): PromiseLike<AwaitedProperties<T>>
function awaitProperties<T extends object>(input: T): AwaitedProperties<T>
function awaitProperties<T extends object, Input extends T | PromiseLike<T>>(
  input: Input,
): PromiseLike<AwaitedProperties<T>> | AwaitedProperties<T> {
  if (isPromiseLike(input)) {
    return input.then(awaitProperties) as PromiseLike<AwaitedProperties<T>>
  }

  const inputEntries = Object.entries(input)
  const hasPromiseProperties = inputEntries.some(([, value]) =>
    isPromiseLike(value),
  )
  if (hasPromiseProperties) {
    const result = Promise.all(
      inputEntries.map(([key, value]) =>
        Promise.resolve(value).then((resolvedValue) => [key, resolvedValue]),
      ),
    ).then(Object.fromEntries)
    return result as PromiseLike<AwaitedProperties<T>>
  }

  return input as AwaitedProperties<T>
}

export function wrapHook(hook: Hook) {
  function wrappedHook<T extends object>(
    setupFunction: () => PromiseLike<T>,
  ): ContextOf<AwaitedProperties<T>>
  function wrappedHook<T extends object>(
    setupFunction: () => T,
  ): ContextOf<AwaitedProperties<T>> {
    let context: AwaitedProperties<T>
    hook(async () => {
      const result = awaitProperties(setupFunction())

      if (isPromiseLike(result)) {
        return result.then((value) => {
          return (context = value)
        })
      }

      return (context = result)
    })

    return {
      get context() {
        return context
      },
    }
  }

  const wrapped = Object.defineProperty(wrappedHook, 'name', {
    value: wrappedHook.name,
    writable: false,
  })

  return wrapped
}
