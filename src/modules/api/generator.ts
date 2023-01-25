import * as Dependencies from '@/modules/api/dependencies'

import { OddGiantsApi } from '@/modules/api/base-class'

export function createOddGiantsApiGenerator(dependencies: typeof Dependencies) {
  return function generateOddGiantsApi() {
    return new OddGiantsApi(dependencies)
  }
}
