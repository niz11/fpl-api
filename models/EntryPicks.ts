import IEvent from '../interfaces/IEvent'
import IEntryPicks from '../interfaces/IEntryPicks';

export default class EntryPicks {
  constructor(data: IEntryPicks) {
    this.active_chip = data.active_chip
    this.automatic_subs = data.automatic_subs
    this.entry_history = data.entry_history
    this.event = data.event
    this.picks = data.picks
  }

  active_chip: string
  automatic_subs: {}[]
  entry_history: {
    bank: number,
    entry: number,
    event: number,
    event_transfers: number,
    event_transfers_cost: number,
    id: number,
    movement: string,
    overall_rank: number,
    points: number,
    points_on_bench: number,
    rank: number,
    rank_sort: number,
    targets: number[] | null,
    total_points: number,
    value: number
  }
  event: IEvent
  picks: {
    element: number,
    is_captain: boolean,
    is_vice_captain: boolean,
    multiplier: number,
    position: number
  }[]
} 