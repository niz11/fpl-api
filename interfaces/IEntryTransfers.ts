import IEntryBase from "./IEntryBase";
import IEntryLeagues from "./IEntryLeagues";
import IChip from "./IChip"

export default interface IEntryTransfers {
  entry: IEntryBase
  history: {
    element_in: number
    element_in_cost: number
    element_out: number
    element_out_cost: number
    entry: number
    event: number
    id: number
    time: string
    time_formatted: string
  }
  leagues: IEntryLeagues
  wildcards: IChip[]
}