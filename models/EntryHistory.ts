import IEntryHistory from "../interfaces/IEntryHistory";
import IEntryBase from "../interfaces/IEntryBase";
import IEntryEvent from "../interfaces/IEntryEvent";
import IEntryLeagues from "../interfaces/IEntryLeagues";

export default class EntryHistory {
  constructor(data: IEntryHistory) {
    this.chips = data.chips
    this.entry = data.entry
    this.history = data.history
    this.leagues = data.leagues
    this.season = data.season
  }
  
  chips: {
    chip: number
    entry: number
    event: number
    name: string
    played_time_formatted: string
    status: string
    time: string
  }[]
  entry: IEntryBase
  history: IEntryEvent[]
  leagues: IEntryLeagues
  season: {
    id: number
    player: number
    rank: number
    season: number
    season_name: string
    total_points: number
  }[]
}