import { createConfiguration, OddGiantsApi, LocationDetails, Location } from '@/client/index.js'
import authenticationCredentials from '@root/credentials.js'
import PromiseQueue from 'p-queue'

let authToken: Promise<string>

const queue = new PromiseQueue({ 
  concurrency: 5,
  interval: 10000,
  intervalCap: 10,
})
async function getToken () {
  if (authToken) return authToken

  authToken = oddGiants.login({ authenticationCredentials }).then(n => n.accessToken)

  return authToken
}


const configuration = createConfiguration({
  authMethods: {
    BearerAuth: {
      tokenProvider: {
        getToken,
      }
    }
  }
})
const oddGiants = new OddGiantsApi(configuration)

console.log('Starting...')
const maxArray: LocationDetails[] = []
maxArray.length = 2**32-2

const stringifyPath = (path: LocationDetails[]) => path.map(location => location.label).join(' -> ')

type PathStatus = 
  | {
    label: string
    status: 'found' | 'not found'
    path: LocationDetails[]
  } 
  | {
    label?: string
    status: 'pending'
    path: LocationDetails[]
    request: Promise<LocationDetails>
  }

const hasNPC = (npcId: string, location: LocationDetails) => {
  return location.npcs?.some(npc => npc.id === npcId)
}

async function main () {
  // const targetId = 'npc_shrine_alph'
  const targetId = 'npc_shrine_zille'
  const user = await oddGiants.me()
  // const location = await oddGiants.location({ locationId: user.locationId })

  const foundPaths = new Set<LocationDetails[]>()

  const cache = new Map<string, PathStatus>()

  type QueueCandidateArgs = {
    label?: string
    path: LocationDetails[]
    connectionId: string
  }

  const userLocation = await oddGiants.location({ locationId: user.locationId })

  const checkLocation = async (npcId: string, locationId: string, parentPath: LocationDetails[] = [], name?: string): Promise<PathStatus> => {
    const cachedLocation = cache.get(locationId)

    if (cachedLocation?.status === 'pending') {
      // console.log(`I'm already checking ${ cachedLocation.label }.`)
      return cachedLocation
    }

    if (cachedLocation) {
      // console.log(`I know ${ cachedLocation.label }. I've ${ cachedLocation.status } it.`)
      return cachedLocation
    }

    // console.log(`Checking ${ name ?? locationId }...`)
    const checkingLocation = queue.add(() => oddGiants.location({ locationId }))

    const pending: PathStatus = {
      label: name,
      path: parentPath,
      request: checkingLocation,
      status: 'pending',
    }

    cache.set(locationId, pending)

    const location = await checkingLocation

    const { label } = location
    const path = [...parentPath, location]

    // console.log(`We are in ${ location.label }`)

    const result: PathStatus = {
      status: hasNPC(npcId, location) ? 'found' : 'not found',
      label,
      path,
    }

    if (hasNPC(npcId, location)) {
      console.log(`Found it! Just take ${ stringifyPath(path) }`)

      foundPaths.add(path)
    }


    if (foundPaths.size) {
      // console.log(`I've already found a path. No need to check any more connections.`)
      // return result
    }

    if (!foundPaths.size) {
      const connectionsTo = location.connectionsTo ?? []
      const connectionsFrom = location.connectionsFrom ?? []
      const connections = [ ...connectionsTo, ...connectionsFrom ]

      console.log(`It's not in ${ location.label }. Checking ${ connections.map((l) => l.label).join(', ') }...`)
      const checks = connections.map(async (connection) => {
        return checkLocation(npcId, connection.id, path, connection.label)
      })

      await Promise.all(checks)
    }

    cache.set(locationId, result)

    return result
  }

  console.log({ user })

  await checkLocation(targetId, user.locationId, [])

  const shortestPath = Array.from(foundPaths).sort((a, b) => {
    return a.length - b.length
  })[0] ?? null


  if (shortestPath.length) {
    console.log(`Take ${ stringifyPath(shortestPath) }`)
    console.log(shortestPath.at(-1))
  }
}




main().catch(console.error)