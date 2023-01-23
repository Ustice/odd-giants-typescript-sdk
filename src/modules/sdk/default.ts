import * as Dependencies from '@/modules/sdk/dependencies'
import { OddGiantsSDK } from '@/modules/sdk'

export function generateOddGiantsSDK() {
  return new OddGiantsSDK(Dependencies)
}
