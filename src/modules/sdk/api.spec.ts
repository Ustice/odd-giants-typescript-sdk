import { beforeEach, silentLogger, mockServerBaseUrl } from '@test'

import { OddGiantsApi } from '@/modules/api'
import * as DefaultDependencies from '@/modules/api/dependencies'

describe('OddGiantsApi', () => {
  const t = beforeEach(async () => {
    const dependencies: typeof DefaultDependencies = {
      ...DefaultDependencies,
      Configuration: DefaultDependencies.Configuration,
      logger: silentLogger,
    }

    const api = new OddGiantsApi(dependencies, {
      basePath: mockServerBaseUrl,
    })

    return {
      api,
      dependencies,
      me: api.me(),
    }
  })
  it('should get my credentials', async () => {
    const { api, me } = t.context

    // Not a real test
    expect(me).toBeTruthy()
    expect(api).toBeTruthy()
  })
})
