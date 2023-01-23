import {
  beforeAll as beforeAllJest,
  beforeEach as beforeEachJest,
} from '@jest/globals'
import { wrapHook } from '@test/wrap-hook'

export const beforeAll = wrapHook(beforeAllJest)
export const beforeEach = wrapHook(beforeEachJest)

export const silentLogger = {
  log: () => {},
  warn: () => {},
  error: () => {},
  info: () => {},
  debug: () => {},
}
