import IEntry from '../interfaces/IEntry'

export default class Entry {
  constructor(entry: IEntry) {
    this.bank = entry.entry.bank
    this.current_event = entry.entry.current_event
    this.deleted = entry.entry.deleted
    this.email = entry.entry.email
    this.event_transfers = entry.entry.event_transfers
    this.event_transfers_cost = entry.entry.event_transfers_cost
    this.extra_free_transfers = entry.entry.extra_free_transfers
    this.favourite_team = entry.entry.favourite_team
    this.id = entry.entry.id
    this.joined_seconds = entry.entry.joined_seconds
    this.joined_time = entry.entry.joined_time
    this.kit = entry.entry.kit
    this.name = entry.entry.name
    this.player = entry.entry.player
    this.player_first_name = entry.entry.player_first_name
    this.player_last_name = entry.entry.player_last_name
    this.player_region_id = entry.entry.player_region_id
    this.player_region_name = entry.entry.player_region_name
    this.player_region_short_iso = entry.entry.player_region_short_iso
    this.started_event = entry.entry.started_event
    this.strategy = entry.entry.strategy
    this.summary_event_points = entry.entry.summary_event_points
    this.summary_event_rank = entry.entry.summary_event_rank
    this.summary_overall_points = entry.entry.summary_overall_points
    this.summary_overall_rank = entry.entry.summary_overall_rank
    this.total_loans = entry.entry.total_loans
    this.total_loans_active = entry.entry.total_loans_active
    this.total_transfers = entry.entry.total_transfers
    this.transfers_or_loans = entry.entry.transfers_or_loans
    this.value = entry.entry.value
    this.leagues = entry.leagues
  }

  bank: number
  current_event: number
  deleted: boolean
  email: boolean
  event_transfers: number
  event_transfers_cost: number
  extra_free_transfers: number
  favourite_team: number
  id: number
  joined_seconds: number
  joined_time: Date
  kit: number
  name: number
  player: number
  player_first_name: number
  player_last_name: number
  player_region_id: number
  player_region_name: number
  player_region_short_iso: number
  started_event: number
  strategy: number
  summary_event_points: number
  summary_event_rank: number
  summary_overall_points: number
  summary_overall_rank: number
  total_loans: number
  total_loans_active: number
  total_transfers: number
  transfers_or_loans: number
  value: number
  leagues: {
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
    }[],
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
    }[],
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
  }
}