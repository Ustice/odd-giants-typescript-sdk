import {
  type OddGiantsSDK,
  type OddGiantsSDKModuleConstructors,
} from '@/modules/sdk'
import { type OddGiantsApi } from '@/modules/api'

export interface Context {
  readonly api: OddGiantsApi
  readonly logger: typeof console
  readonly sdk: OddGiantsSDK
  readonly moduleConstructors: typeof OddGiantsSDKModuleConstructors
}

export interface Credentials {
  email: string
  password: string
  remember: boolean
}
