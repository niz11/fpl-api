import IEntryBase from "../interfaces/IEntryBase";
import IEntryLeagues from "../interfaces/IEntryLeagues";
import IChip from "../interfaces/IChip"
import IEntryTransfers from "../interfaces/IEntryTransfers";

export default class EntryTransfers {
  constructor(data: IEntryTransfers) {
    this.entry = data.entry
    this.history = data.history
    this.leagues = data.leagues
    this.wildcards = data.wildcards
  }
  
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