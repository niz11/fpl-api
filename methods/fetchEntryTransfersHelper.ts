import request from 'request-promise-native'
import { CookieJar, Response } from 'request'
import IEntryTransfersHelper from '../interfaces/IEntryTransfersHelper'
import options from '../options'

export default async function fetchEntryTransfersHelper(session: CookieJar | null = null): Promise<IEntryTransfersHelper> {
  try {
    let localOptions = options

    if (session) {
      localOptions = { ...localOptions, jar: session }
    }

    const response: Response = await request
  } catch (error) {
    throw error
  }
}