import IEntryBase from './IEntryBase'
import IEntryEvent from './IEntryEvent';
import IEntryLeagues from './IEntryLeagues';
import IChip from './IChip'

export default interface IEntryHistory {
  chips: IChip[]
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