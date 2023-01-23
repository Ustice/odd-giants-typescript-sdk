export { Configuration, OddGiantsApi as OddGiantsApiGenerated } from '@odd/api'
export { default as credentials } from '@root/credentials'
export { default as PromiseQueue } from 'p-queue'

// Disable console.debug when DEBUG env is not set
export const logger = Object.assign({}, console, {
  debug: (...args: Parameters<typeof console.debug>) => {
    if (!process.env.DEBUG) return
    console.debug(...args)
  },
  whenCalledDebug: <
    Args extends unknown[],
    Returns,
    Fn extends (...args: Args) => Returns,
  >(
    message: string,
    fn: Fn,
  ): Fn =>
    ((...args) => {
      logger.debug(message, args)
      return fn(...args)
    }) as Fn,
})
