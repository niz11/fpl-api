import IClassicLeaguePage from '../interfaces/IClassicLeaguePage'

export default class ClassicLeaguePage {
  constructor(data: IClassicLeaguePage) {
    this.league = data.league
    this.new_entries = data.new_entries
    this.standings = data.standings
    this.update_status = data.update_status
  }

  league: {
    admin_entry: number,
    closed: boolean,
    created: string,
    forum_disabled: boolean,
    id: number,
    league_type: string,
    leagueban_set: number[],
    make_code_public: boolean,
    name: string,
    rank: number | null,
    reprocess_standings: boolean,
    short_name: string | null,
    size: number | null,
    start_event: number,
    _scoring: string
  }[]
  new_entries: {
    has_next: boolean,
    number: number,
    results: {}[] 
  }
  standings: {
    has_next: boolean,
    number: number,
    results: {
      entry: number,
      entry_name: string,
      event_total: number,
      id: number,
      last_rank: number,
      league: number,
      movement: string,
      own_entry: boolean,
      player_name: string,
      rank: number,
      rank_sort: number,
      start_event: number,
      stop_event: number,
      total: number
    }[]
  }
  update_status: number
}