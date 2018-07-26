import IEvent from './IEvent'
import IEntryEvent from './IEntryEvent'

export default interface IEntryPicks {
  active_chip: string,
  automatic_subs: {}[],
  entry_history: IEntryEvent,
  event: IEvent,
  picks: {
    element: number,
    is_captain: boolean,
    is_vice_captain: boolean,
    multiplier: number,
    position: number
  }[]
} 