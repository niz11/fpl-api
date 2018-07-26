import { CookieJar } from 'request'
import request from 'request-promise-native'
import ITransferRequest from '../interfaces/ITransferRequest'
import ITransferRequestResponse from '../interfaces/ITransferRequestResponse'
import options from '../options'

export default async function makeTransfers(transfers: ITransferRequest, session: CookieJar | string | null = null): Promise<ITransferRequestResponse> {
  try {
    let response: ITransferRequestResponse
    let csrftoken: string | null = null
    const localOptions = { ...options, method: 'POST', body: transfers }

    if (session) {
      if (typeof session === 'string') {

      } else {
        localOptions.jar = session 
      }
    }

    response = await request('https://fantasy.premierleague.com/drf/transfers', localOptions)

    return response
  } catch (error) {
    throw error
  }
}