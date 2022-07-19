import { apiBaseUrl } from './config'
interface LoginArgs {
  email: string
  password: string
  remember?: boolean
}

type LoginResponse = {
  access_token: string
  refresh_token: string
  expires_in: number
  remember: boolean
}

export async function login(args: LoginArgs): Promise<LoginResponse> {
  return fetch(`${ apiBaseUrl }/login`).then((n) => n.json())
}

