import { LocationModule } from '@/modules/sdk/location'
import { MeModule } from '@/modules/sdk/me'

export const OddGiantsSDKModuleConstructors = {
  location: LocationModule,
  me: MeModule,
} as const
export type OddGiantsSDKModuleConstructors =
  typeof OddGiantsSDKModuleConstructors

export type OddGiantsSDKModuleInstances = {
  location: LocationModule
  me: MeModule
}
