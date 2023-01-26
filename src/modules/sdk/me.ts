import { OddGiantsSDKModule } from '@/modules/sdk'
import { type Location } from '@/modules/sdk/location'
import { User } from '@odd/api'

export { User } from '@odd/api'

export class MeModule extends OddGiantsSDKModule<User> {
  constructor(data?: Promise<User> | User) {
    super()

    if (data) {
      this.current = Promise.resolve(data)
    }
  }

  /**
   * ## gps
   * Get directions to the nearest location with given contstraints.
   *
   * @param target What are you looking for?
   * @returns
   */
  public async gps<T extends GpsArgs>(target: T) {
    const me = await this.latest()
    const startingLocation = me.locationId
    const { locationCheckers } = this.context.sdk.location

    type LocationCheckerName =
      keyof typeof this.context.sdk.location.locationCheckers

    const tests = Object.entries(target).map((entry) => {
      const [testName, testValue] = entry as [LocationCheckerName, string]
      return locationCheckers[testName](testValue)
    })
    const test = (location: Location) => tests.every((test) => test(location))

    const result = await this.context.sdk.location.closestGiven(
      startingLocation,
      test,
    )

    if (result.status === 'not found') {
      return null
    }

    if (result.status === 'pending') {
      throw new Error('This should never happen')
    }

    return result.path
  }

  public async latest() {
    const me = this.context.api.me()
    this.current = me
    return me
  }

  public async whereAmI(): Promise<Location> {
    const me = await this.latest()

    if (!me) {
      throw new Error('No user found')
    }

    if (!me.lastLocation) {
      throw new Error('No location found')
    }

    return this.context.sdk.location.findUnique(me.lastLocation.id)
  }
}

type PropertyUnion<
  Options extends object,
  Kinds extends keyof Options = keyof Options,
> = Kinds extends unknown
  ? { [K in Kinds]: K extends Exclude<keyof Options, K> ? never : Options[K] }
  : never

type GpsArgs = PropertyUnion<{
  hasNpc: string
  knownAs: string
  hasItem: string
}>
