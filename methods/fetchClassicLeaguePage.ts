import request from 'request-promise-native'
import IClassicLeaguePage from '../interfaces/IClassicLeaguePage'
import ClassicLeaguePage from '../models/ClassicLeaguePage'
import options from '../options'

export default async function fetchLeaguePage(leagueId: number, page: number = 1, phase: number = 1, newEntriesPage: number = 1): Promise<ClassicLeaguePage> {
  try {
    const response: IClassicLeaguePage = await request(`https://fantasy.premierleague.com/drf/leagues-classic-standings/${leagueId}?phase=${phase}&le-page=${newEntriesPage}&ls-page=${page}`, options)

    return new ClassicLeaguePage(response)
  } catch (error) {
    throw error
  }
}