import request from 'request-promise-native'
import IEntry from '../interfaces/IEntry'
import Entry from '../models/Entry'
import options from '../options'

export default async function fetchEntry(entryId: number): Promise<Entry> {
  try {
    const data: IEntry = await request(`https://fantasy.premierleague.com/drf/entry/${entryId}`, options)

    return new Entry(data)
  } catch (error) {
    throw error
  }
}