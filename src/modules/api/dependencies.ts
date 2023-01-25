export { Configuration, OddGiantsApi as OddGiantsApiGenerated } from '@odd/api'
export { default as credentials } from '@root/credentials'
export { default as PromiseQueue } from 'p-queue'

// Disable console.debug when DEBUG env is not set
export const logger: Console = Object.assign({}, console, {
  debug: (...args: Parameters<typeof console.debug>) => {
    if (!process.env.DEBUG) return
    console.debug(...args)
  },
})
