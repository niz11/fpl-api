import ILive from '../interfaces/ILive'
import Live from '../models/Live'
import request from 'request-promise-native'
import options from '../options'

/**
 * Fetch live event data
 */
export default async function fetchLive(eventId: number) : Promise<Live> {
  try {
    const response: ILive = await request(`https://fantasy.premierleague.com/drf/event/${eventId}/live`, options)

    return new Live(response)
  } catch (error) {
    throw error
  }
}