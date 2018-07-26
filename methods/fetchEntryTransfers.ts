import request from 'request-promise-native'
import IEntryTransfers from '../interfaces/IEntryTransfers'
import EntryTransfers from '../models/EntryTransfers'
import options from '../options'

export default async function fetchEntryTransfers(entryId: number) : Promise<EntryTransfers> {
  try {
    const data: IEntryTransfers = await request(`https://fantasy.premierleague.com/drf/entry/${entryId}/transfers`, options)

    return new EntryTransfers(data)
  } catch (error) {
    throw error
  }
}