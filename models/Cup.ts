import IEntryBase from '../interfaces/IEntryBase'
import IEntryLeagues from '../interfaces/IEntryLeagues'
import ICup from '../interfaces/ICup'

export default class Cup {
  constructor(data: ICup) {
    this.cup_matches = data.cup_matches
    this.cup_status = data.cup_status
    this.entry = data.entry
    this.leagues = data.leagues
  }

  cup_matches: {
    entry_1: number
    entry_1_name: string
    entry_1_player_name: string
    entry_1_points: number
    entry_2: number
    entry_2_name: string
    entry_2_player_name: string
    entry_2_points: number
    event: number
    id: number
    tiebreak_used: boolean
    winning_entry: number
  }[]
  cup_status: {
    qualification_event: number
    qualification_numbers: number
    qualification_rank: number
    qualification_state: string
  }
  entry: IEntryBase
  leagues: IEntryLeagues
} 