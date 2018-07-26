import request from 'request-promise-native'
import ICup from '../interfaces/ICup'
import Cup from '../models/Cup'
import options from '../options'

export default async function fetchEntryCup(entryId: number) : Promise<Cup> {
  try {
    const data: ICup = await request(`https://fantasy.premierleague.com/drf/entry/${entryId}/cup`, options)

    return new Cup(data)
  } catch (error) {
    throw error
  }
}