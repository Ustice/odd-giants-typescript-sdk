/**
 * Returns the environment variable with the given name. Throws if it does not exist.
 * @param name {string} Name of the environment variable to retrieve
 * @returns {string} Value of given environment variable
 */
export const env = (name: string): string => {
  const value = process.env[name]

  if (value === undefined) {
    throw new Error(`Missing required environment variable ${ name }`)
  }

  return value
}

/**
 * Takes something that maybe an Error, and turns it into an instance of Error
 *
 * @param maybeError unknown This could be an error or a string.
 * @returns Error representation of maybeError
 */
export const normalizeError = (maybeError: unknown): Error => {
  if (maybeError instanceof Error) {
    return maybeError
  }

  if (typeof maybeError === 'string') {
    return new Error(maybeError)
  }

  try {
    return new Error(JSON.stringify(maybeError))
  }
  catch (error) {
    return new Error(String(maybeError))
  }
}

type Resolver<T> = (
  (() => void) &
  ((data: null | undefined) => void) &
  ((data: T) => void) &
  ((data: PromiseLike<T>) => void)
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Rejector = (reason?: any) => void

type PromiseControllersTuple<T> = [
  promise: Promise<T>,
  resolve: Resolver<T>,
  reject: Rejector
]

type Callback<T, E extends Error | unknown> = (error: E, data: T) => void
type PromiseGeneratorArgs<T extends unknown, E extends Error | unknown> = {
  cb: Callback<T, E>
  reject: (error: E) => void
  resolve: (value: T | Promise<T>) => void
}

type PromiseGenerator <T extends unknown, E extends Error | unknown> = (controller: PromiseGeneratorArgs<T, E>) => void

/**
 * Creates a promise, as well as the controlling functions.
 *
 * @param fn (optional) When passed a function, the promise and the controlling functions are injected into this function for immediate use.
 * @returns PromiseControllersTuple<T>
 *
 * @example
 *
 * const [ processing, doneProcessing, throwProcessingError ] = makePromise()
 *
 * const [ loadingFile ] = makePromise(({ cb }) => fs.readFile(filepath, cb))
 */
export const makePromise = <T = unknown, E = unknown>(fn?: PromiseGenerator<T, E>): PromiseControllersTuple<T> => {
  let trigger!: Resolver<T>
  let cancel!: Rejector

  // Promise construction is synchronous, so trigger and cancel are guarenteed
  // to be defined.
  const signal = new Promise<T>((resolve, reject) => {
    trigger = resolve as Resolver<T>
    cancel = reject
  })

  const callback: Callback<T, E> = (error, data) => {
    if (error) {
      return cancel(error)
    }

    return trigger(data)
  }

  if (fn) {
    fn({
      cb: callback,
      reject: cancel,
      resolve: trigger,
    })
  }

  return [ signal, trigger, cancel ]
}

type ResolvedTuple<T> = [ error: null, data: T ]
type RejectedTuple<E> = [ error: E, data: null ]


/**
 * Returns a Promise that always resolves to a tuple containing the results of the promise.
 * @param promise Promise<unknown>
 * @returns Promise<[ error: null, data: unknown ] | [ error: unknown, data: null ]>
 *
 * @example
 *
 * async function example () {
 *  const [ fileError, fileContents ] = await resultOf(makePromise(({ cb }) => fs.readFile(filepath, cb)))
 *  if (fileError) {
 *    throw fileError
 *  }
 *
  * const result = parseFile(fileContents)
 *  return result
 * }
 */
export const resultOf = async <T extends Promise<unknown>, E extends Error>(promise: T): Promise<ResolvedTuple<T> | RejectedTuple<E>> => {
  try {
    const data = await promise

    return [ null, data ] as ResolvedTuple<Awaited<T>>
  }
  catch (error: unknown) {
    return [ normalizeError(error), null ] as RejectedTuple<E>
  }
}
