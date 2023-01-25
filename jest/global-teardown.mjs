import { $ } from 'zx'

async function jestTeardown(globalConfig, projectConfig) {
  console.log('Shutting down mock server')

  await $`docker kill ${globalThis.mockServerName}`
  await globalThis.__MockServerProcess__
}

export default jestTeardown
