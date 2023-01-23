import { OddGiantsSDKModule } from '@/modules/sdk/module'
import {
  instanceOfLocation,
  type LocationDetails as Location,
  type Region,
} from '@odd/api'

export { type LocationDetails as Location } from '@odd/api'

function isLocation(location: object | undefined): location is Location {
  return !!location && instanceOfLocation(location)
}

export class LocationModule extends OddGiantsSDKModule {
  static cache = new Map<string, Location>()
  constructor(data?: Location | Promise<Location>) {
    super()
    if (isLocation(data)) {
      this.current = Promise.resolve(data)
    }
  }

  findUnique(locationId: string) {
    return this.context.api.location({ locationId })
  }

  async listRegions(): Promise<Region[]> {
    const categories = await this.context.api.categories()

    return categories.locations.categories
  }

  listByRegion(regionId: string) {
    return this.context.api.region({ regionId })
  }

  async closestGiven(
    startingLocation: string,
    isItHere: (location: Location) => boolean,
  ): Promise<LocationResult> {
    const checked = new Map<string, LocationResult>()
    const candidates = new Set<LocationResult>()

    const checkLocation = async (
      locationId: string,
      path: Location[],
    ): Promise<LocationResult> => {
      const cached = checked.get(locationId)

      if (cached) return cached

      const pending: LocationResult = {
        path,
        request: this.context.api.location({ locationId }),
        status: 'pending',
      } // This is a thing

      checked.set(locationId, pending)

      const location: Location = await pending.request

      const wasItThere = isItHere(location)

      if (wasItThere) {
        const success: LocationResult = {
          path: [...path, location],
          status: 'found',
        }

        checked.set(locationId, success)
        candidates.add(success)

        this.context.logger.debug(
          `Found one! ${this.stringifyPath([...path, location])}`,
        )

        return success
      }

      this.context.logger.debug(
        `Checking ${location.label}'s neighbors: ${
          location.connectionsTo?.map((n) => n.label).join(', ') ?? 'none'
        }`,
      )

      const neighborChecks =
        candidates.size || !location.connectionsTo
          ? []
          : await Promise.allSettled(
              location.connectionsTo.map((neighbor) =>
                checkLocation(neighbor.id, [...path, location]),
              ),
            )

      const successes: (LocationResult & { status: 'found' })[] =
        neighborChecks.flatMap((result) =>
          result.status === 'fulfilled' && result.value.status === 'found'
            ? [result.value]
            : [],
        )

      if (!successes.length) {
        const failure: LocationResult = {
          status: 'not found',
        }

        this.context.logger.debug(`It's not in ${location.label}`)

        checked.set(locationId, failure)

        return failure
      }

      const success = successes.sort(
        ({ path: a }, { path: b }) => a.length - b.length,
      )[0]

      checked.set(locationId, success)

      return success
    }

    return checkLocation(startingLocation, [])
  }

  public stringifyPath(path: Location[]) {
    return path.map((location) => location.label).join(' -> ')
  }

  public locationCheckers = {
    hasItem: (itemId: string) => (location?: Location | undefined) =>
      !!location?.items?.some(({ id }) => id === itemId),
    hasNpc: (npcId: string) => (location?: Location | undefined) =>
      !!location?.npcs?.some(({ id }) => id === npcId),
    knownAs: (locationId: string) => (location?: Location | undefined) =>
      location?.id === locationId,
  }
}

type LocationResult =
  | {
      status: 'found'
      path: Location[]
    }
  | {
      status: 'not found'
    }
  | {
      status: 'pending'
      path: Location[]
      request: Promise<Location>
    }
