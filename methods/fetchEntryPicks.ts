import request from 'request-promise-native'
import IEntryPicks from '../interfaces/IEntryPicks'
import EntryPicks from '../models/EntryPicks'
import options from '../options'

export default async function fetchEntryPicks(entryId: number, eventId: number) : Promise<EntryPicks> {
  try {
    const data: IEntryPicks = await request(`https://fantasy.premierleague.com/drf/entry/${entryId}/event/${eventId}/picks`, options)

    return new EntryPicks(data)
  } catch (error) {
    throw error
  }
}