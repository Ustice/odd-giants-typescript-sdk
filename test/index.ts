import {
  beforeAll as beforeAllJest,
  beforeEach as beforeEachJest,
} from '@jest/globals'
import { wrapHook } from '@test/wrap-hook'

export const beforeAll = wrapHook(beforeAllJest)
export const beforeEach = wrapHook(beforeEachJest)

export const silentLogger: Console = Object.assign({}, console, {
  log: () => {},
  warn: () => {},
  error: () => {},
  info: () => {},
  debug: () => {},
})

export const mockServerBaseUrl = 'http://0.0.0.0:9003'
