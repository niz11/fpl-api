export default interface IEvent {
  [key: string]: any,    
  average_entry_score: number,
  data_checked: number,
  deadline_time: string,
  deadline_time_epoch: number,
  deadline_time_formatted: string,
  deadline_time_game_offset: number,
  finished: boolean,
  highest_score: number,
  highest_scoring_entry: number,
  id: number,
  is_current: boolean,
  is_next: boolean,
  is_previous: boolean,
  name: string
}