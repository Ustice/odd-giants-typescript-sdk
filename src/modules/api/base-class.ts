import {
  type Configuration,
  type SessionInfo,
  type AuthenticationCredentials,
} from '@odd/api'
import * as Dependencies from '@/modules/api/dependencies'
import { type PromiseQueue } from '@/modules/api/dependencies'

export class OddGiantsApi extends Dependencies.OddGiantsApiGenerated {
  #authToken?: Promise<string>
  #credentials: AuthenticationCredentials
  #session?: Promise<SessionInfo>
  #logger: typeof console
  #queue: PromiseQueue

  constructor(
    { credentials, Configuration, logger, PromiseQueue }: typeof Dependencies,
    configuration?: Configuration,
  ) {
    super(
      new Configuration({
        ...configuration,
        accessToken: () => {
          if (this.#session)
            return this.#session.then(({ accessToken }) => accessToken)

          if (this.#authToken) return this.#authToken

          this.#logger.log('No existing auth token. Logging in.')
          const fetchingSession = this.login({
            authenticationCredentials: this.#credentials,
          })
          this.#authToken = fetchingSession.then((n) => n.accessToken)
          this.#session = fetchingSession

          return this.#authToken
        },
        middleware: [
          {
            onError: ({ error }) => {
              this.#logger.error('Error', error)
              throw error
            },
            pre: async ({ init, url }) => {
              this.#logger.debug(`Queued request for ${url}`)
              return this.#queue.add(() => {
                this.#logger.debug(
                  `Requesting ${url} with ${JSON.stringify(init, null, 2)}`,
                )
                return { init, url }
              })
            },
          },
        ],
      }),
    )
    this.#logger = logger
    this.#credentials = credentials
    this.#queue = new PromiseQueue({
      concurrency: 5,
      interval: 10000,
      intervalCap: 10,
    })
  }

  public get session() {
    return this.#session
  }
}
