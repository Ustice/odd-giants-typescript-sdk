import { inspect } from 'util'
import { createConfiguration, OddGiantsApi, LocationDetails } from '../client'
import authenticationCredentials from '../credentials'

const configuration = createConfiguration({
  authMethods: {
    BearerAuth: {
      tokenProvider: {
        getToken: async () => {
          const session = await oddGiants.login({ authenticationCredentials })
          return session.accessToken
        }
      }
    }
  }
})
const oddGiants = new OddGiantsApi(configuration)

console.log('Starting...')
const maxArray: LocationDetails[] = []
maxArray.length = 2**32-2
async function main () {
  const targetId = 'npc_shrine_alph'
  const user = await oddGiants.me()
  const location = await oddGiants.location({ locationId: user.locationId })

  const hasTarget = (target: string, location: LocationDetails) => location.npcs?.some(npc => npc.id === target) ?? false
  
  const checked = new Map<string, LocationDetails[]>()
  const checkConnections = async (locationId: string, itemId: string, path: LocationDetails[] = []): Promise<LocationDetails[] | undefined> => {
    const location = await oddGiants.location({ locationId })
    
    console.log(`Checking ${ location.label}`)
    
    if (hasTarget(targetId, location)) {
      console.log('FOUND IT!', path)
      return path
    }

    const cachedPath = checked.get(location.id)
    if (!cachedPath || cachedPath && cachedPath.length > path.length) {
      checked.set(location.id, path)
    }

    const paths = await Promise.all(location.connectionsTo?.map((location) => {

      return checkConnections(location.id, itemId, [ ...path, location ])
    }))

    console.log('Checking paths...')

    const thePath = paths.reduce((minimum, path) => {
      if (!path && !minimum) {
        return []
      }

      if (path && (!minimum || !minimum.length)) {
        return path
      }

      if ((!path || !path.length) && minimum) {
        return minimum
      }

      return minimum!.length > path!.length ? path : minimum
    }, maxArray)

    return thePath === maxArray ? undefined : thePath
  }
  
  const path = await checkConnections(user.locationId, targetId)
  const items = location.items.map((item) => item.name)

  console.log('API called successfully. Returned data:\n', JSON.stringify({ user, path }, null, 2))
}




main().catch(console.error)