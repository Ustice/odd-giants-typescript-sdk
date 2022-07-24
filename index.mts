import { createConfiguration, OddGiantsApi } from './client'

const configuration = createConfiguration()
const oddGiants = new OddGiantsApi(configuration)

const authenticationCredentials = {
  email: "user@domain.tld",
  password: "THIS_IS_A_BAD_PASSWORD",
  remember: true,
}

const value = await oddGiants.login(authenticationCredentials)

console.log(`API called successfully. Returned data: ${ value }`)