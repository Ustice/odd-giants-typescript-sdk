import { generateOddGiantsSDK } from '@/modules/sdk'

const oddGiants = generateOddGiantsSDK()
oddGiants.me

console.log('Starting...')

async function main() {
  console.log('Searching...')
  const user = await oddGiants.me.latest()

  console.log({ user })

  const searchTerm = 'Spice Plant'

  const results = await oddGiants.search(searchTerm)

  console.log(results)
  // console.log(JSON.stringify(results.items, null, 2))

  const item = results.items.find((item) => item.label === searchTerm)

  console.log('Looking for item: ', item?.label)

  if (!item) {
    console.log('Item not found')
    return
  }

  // console.log('search response', { sprigganResult })

  // return
  const gpsResult = await oddGiants.me.gps({ hasItem: item.id })

  if (gpsResult) {
    console.log(`Found one! ${oddGiants.location.stringifyPath(gpsResult)}`)
  }

  if (!gpsResult) {
    console.log(`Not found`)
  }
}

main()
  .catch(async (error) => {
    if (error.response?.text) {
      console.log('Error', await error.response.text())
    }
    console.error(error)
  })
  .finally(process.exit)
