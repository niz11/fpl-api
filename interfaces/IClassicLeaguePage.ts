export default interface IClassicLeaguePage {
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