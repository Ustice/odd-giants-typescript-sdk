import { type Context } from '@/modules/sdk/context'
import * as Dependendencies from '@/modules/sdk/context/generator/dependencies'
export function createContextGenerator({
  constructors: OddGiantsSDKModuleConstructors,
  generateOddGiantsApi,
  logger: defaultLogger,
  OddGiantsSDK,
}: typeof Dependendencies) {
  return function generateContext(overrides: Partial<Context> = {}): Context {
    const logger = overrides.logger ?? defaultLogger
    const api = overrides.api ?? generateOddGiantsApi()
    const moduleConstructors =
      overrides.moduleConstructors ?? OddGiantsSDKModuleConstructors
    const sdk = overrides.sdk ?? new OddGiantsSDK()

    return {
      api,
      logger,
      moduleConstructors,
      sdk,
      ...overrides,
    }
  }
}
