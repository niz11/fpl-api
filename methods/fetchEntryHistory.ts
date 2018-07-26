import request from 'request-promise-native'
import IEntryHistory from '../interfaces/IEntryHistory'
import EntryHistory from '../models/EntryHistory'
import options from '../options'

export default async function fetchEntryHistory(entryId: number) {
  try {
    const data: IEntryHistory = await request(`https://fantasy.premierleague.com/drf/entry/${entryId}/history`, options)

    return new EntryHistory(data)
  } catch (error) {
    throw error
  }
}