import { $ } from 'zx'

// const mockServerName = `Odd-Giants-Mock-API-${ randomUUID() }`
const mockServerName = `Odd-Giants-Mock-API`

async function setupJest(globalConfig, projectConfig) {
  console.log(`Starting ${mockServerName}`)

  globalThis.mockServerName = mockServerName

  const containerStatus = await $`
    docker ps -a --filter name=${mockServerName} --format '{{.Status}}'
  `

  if (containerStatus.stdout.match('Up')) {
    console.log('Mock server already running')
    return
  }

  const server = $`
    docker run \\
      --rm \\
      --name ${mockServerName} \\
      -v $(pwd):/root/apis \\
      -p 9003:4010 \\
      stoplight/prism mock \\
        -h 0.0.0.0  \\
        /root/apis/api.yml
  `

  let loaded, failed
  const loading = new Promise((resolve, reject) => {
    loaded = resolve
    failed = reject
  })

  server.stdout.on('data', (piece) => {
    if (!String(piece).includes('Prism is listening on')) return
    console.log('Server has started')
    loaded()
    server.stdout.removeAllListeners()
    server.stderr.removeAllListeners()
  })

  server.stderr.once('error', (error) => {
    failed(error)
    server.stdout.removeAllListeners()
  })

  globalThis.__MockServerProcess__ = server
  await loading
}

export default setupJest
