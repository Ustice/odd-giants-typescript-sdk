import {
  beforeAll as beforeAllJest,
  beforeEach as beforeEachJest,
} from '@jest/globals'
import { wrapHook } from '@test/wrap-hook'

export const beforeAll = wrapHook(beforeAllJest)
export const beforeEach = wrapHook(beforeEachJest)

export const silentLogger: Console = Object.assign({}, console, {
  debug: () => void 0,
  error: () => void 0,
  info: () => void 0,
  log: () => void 0,
  warn: () => void 0,
})

export const mockServerBaseUrl = 'http://0.0.0.0:9003'
