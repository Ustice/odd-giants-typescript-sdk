import { beforeEach, silentLogger } from '@test'

import { generateOddGiantsApi } from '@/modules/api'

describe('OddGiantsApi', () => {
  const t = beforeEach(() => {
    console.log('Inside beforeEach')

    const dependencies = {
      logger: silentLogger,
    }
    const api = generateOddGiantsApi()

    return {
      api,
      dependencies,
      me: api.me(),
    }
  })
  it('should get my credentials', async () => {
    const { api, me } = t.context

    console.log('~~~ Running test with context', me)
  })
})
