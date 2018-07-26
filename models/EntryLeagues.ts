import IEntryLeagues from '../interfaces/IEntryLeagues'

export default class EntryLeagues {
  constructor(data: IEntryLeagues) {
    this.classic = data.classic
    this.cup = data.cup
    this.h2h = data.h2h

    if (data.renewable) {
      this.renewable = data.renewable
    }
  }

  classic: {
    admin_entry: number | null,
    closed: boolean,
    created: string,
    entry_can_admin: boolean,
    entry_can_forum: boolean,
    entry_can_invite: boolean,
    entry_can_leave: boolean,
    entry_change: number | null,
    entry_code: number | null,
    entry_last_rank: number | null,
    entry_movement: string | null,
    entry_rank: number | null,
    forum_disabled: boolean,
    id: number,
    league_type: string,
    make_code_public: boolean,
    name: string,
    rank: number | null,
    reprocess_standings: boolean,
    short_name: string | null ,
    size: null,
    start_event: number,
    _scoring: string
  }[]
  cup: {
    entry_1_draw: number,
    entry_1_entry: number,
    entry_1_loss: number,
    entry_1_name: string,
    entry_1_player_name: string,
    entry_1_points: number,
    entry_1_total: number,
    entry_1_win: number,
    entry_2_draw: number,
    entry_2_entry: number,
    entry_2_loss: number,
    entry_2_name: string,
    entry_2_player_name: string,
    entry_2_points: number,
    entry_2_total: number,
    entry_2_win: number,
    event: number,
    id: number,
    is_knockout: boolean,
    own_entry: boolean,
    seed_value: null,
    tiebreak: null,
    winner: number
  }[]
  h2h: {
    admin_entry: number | null,
    closed: boolean,
    created: string,
    entry_can_admin: boolean,
    entry_can_forum: boolean,
    entry_can_invite: boolean,
    entry_can_leave: boolean,
    entry_change: number | null,
    entry_code: number | null,
    entry_last_rank: number | null,
    entry_movement: string | null,
    entry_rank: number | null,
    forum_disabled: boolean,
    id: number,
    is_cup: boolean,
    ko_rounds: number,
    league_type: string,
    make_code_public: boolean,
    name: string,
    rank: number | null,
    short_name: string | null,
    size: number,
    start_event: number,
    _scoring: string
  }[]
  renewable?: {
    admin_player: number,
    deleted: boolean,
    id: number,
    name: string,
    new_league: number | null,
    old_league_id: number,
    short_name: string | null
  }[]
}