import request from 'request-promise-native'
import options from '../options'
import IEntryLeagues from '../interfaces/IEntryLeagues'
import EntryLeagues from '../models/EntryLeagues'

export default async function fetchEntryLeagues(entryId: number): Promise<EntryLeagues> {
  try {
    const response: IEntryLeagues = await request(`https://fantasy.premierleague.com/drf/leagues-entered/${entryId}?renewable=1`, options)

    return new EntryLeagues(response)
  } catch (error) {
    throw error
  }
}