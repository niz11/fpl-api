import { CookieJar } from 'request'
import request from 'request-promise-native'
import options from '../options'
import BootstrapDynamic from '../models/BootstrapDynamic'
import IBootstrapDynamic from '../interfaces/IBootstrapDynamic'

export default async function fetchBootstrapDynamic(session: CookieJar | null = null): Promise<BootstrapDynamic> {
  try {
    let data: IBootstrapDynamic

    if (session) {
      data = await request('https://fantasy.premierleague.com/drf/bootstrap-dynamic', { ...options, jar: session })
    } else {
      data = await request('https://fantasy.premierleague.com/drf/bootstrap-dynamic', options)
    }

    return new BootstrapDynamic(data)
  } catch (error) {
    throw error
  }
}