import fetch, { RequestInfo, RequestInit } from 'node-fetch'
import { CookieJar } from 'tough-cookie'
import FormData from 'form-data'
import fetchCookie from 'fetch-cookie/node-fetch'

/* browser:start */

export enum ElementStatus {
  AVAILABLE = 'a',
  UNAVAILABLE = 'u',
  INJURED = 'i',
  SUSPENDED = 's',
  NOT_PLAYING = 'n',
  DEPARTED = 'd',
}

export type ChipName = 'bboost' | '3xc' | 'freehit' | 'wildcard'

export type StatIdentifier =
  | 'minutes'
  | 'goals_scored'
  | 'assists'
  | 'clean_sheets'
  | 'goals_conceded'
  | 'own_goals'
  | 'penalties_saved'
  | 'penalties_missed'
  | 'yellow_cards'
  | 'red_cards'
  | 'saves'
  | 'bonus'
  | 'bps'

export interface ElementStats {
  label: string
  name: string
}

export interface ElementTypes {
  id: number
  plural_name: string
  plural_name_short: string
  singular_name: string
  singular_name_short: string
  squad_max_play: number
  squad_min_play: number
  squad_select: number
  sub_positions_locked: number[]
  ui_shirt_specific: boolean
}

export interface Element {
  assists: number
  bonus: number
  bps: number
  chance_of_playing_next_round: number | null
  chance_of_playing_this_round: number | null
  clean_sheets: number
  code: number
  cost_change_event: number
  cost_change_event_fall: number
  cost_change_start: number
  cost_change_start_fall: number
  creativity: string
  dreamteam_count: number
  element_type: number
  ep_next: string
  ep_this: string
  event_points: number
  first_name: string
  form: string
  goals_conceded: number
  goals_scored: number
  ict_index: string
  id: number
  in_dreamteam: boolean
  influence: string
  minutes: number
  news: string
  news_added: string | null
  now_cost: number
  own_goals: number
  penalties_missed: number
  penalties_saved: number
  photo: string
  points_per_game: string
  red_cards: number
  saves: number
  second_name: string
  selected_by_percent: string
  special: boolean
  squad_number: number | null
  status: ElementStatus
  team: number
  team_code: number
  threat: string
  total_points: number
  transfers_in: number
  transfers_in_event: number
  transfers_out: number
  transfers_out_event: number
  value_form: string
  value_season: string
  web_name: string
  yellow_cards: number
}

export interface EntryChipPlay {
  event: number
  name: ChipName
  time: string
}

export interface EventChipPlay {
  chip_name: ChipName
  num_played: number
}

export interface TopElementInfo {
  id: number
  points: number
}

export interface Event {
  average_entry_score: number
  chip_plays: EventChipPlay[]
  data_checked: boolean
  deadline_time: string
  deadline_time_epoch: number
  deadline_time_game_offset: number
  finished: boolean
  highest_score: number | null
  highest_scoring_entry: number | null
  id: number
  is_current: boolean
  is_next: boolean
  is_previous: boolean
  most_captained: number | null
  most_selected: number | null
  most_transferred_in: number | null
  most_vice_captained: number | null
  name: string
  top_element: number | null
  top_element_info: TopElementInfo | null
  transfers_made: number
}

export interface GameSettings {
  cup_start_event_id: number
  league_join_private_max: number
  league_join_public_max: number
  league_max_ko_rounds_private_h2h: number
  league_max_size_private_h2h: number
  league_max_size_public_classic: number
  league_max_size_public_h2h: number
  league_points_h2h_draw: number
  league_points_h2h_lose: number
  league_points_h2h_win: number
  league_prefix_public: string
  squad_squadplay: number
  squad_squadsize: number
  squad_team_limit: number
  squad_total_spend: number
  stats_form_days: number
  sys_vice_captain_enabled: boolean
  timezone: string
  transfers_sell_on_fee: number
  ui_currency_multiplier: number
  ui_special_shirt_exclusions: any[]
  ui_use_special_shirts: boolean
}

export interface Phase {
  id: number
  name: string
  start_event: number
  stop_event: number
}

export interface Team {
  code: number
  draw: number
  form: string | null
  id: number
  loss: number
  name: string
  played: number
  points: number
  position: number
  short_name: string
  strength: number
  strength_attack_away: number
  strength_attack_home: number
  strength_defence_away: number
  strength_defence_home: number
  strength_overall_away: number
  strength_overall_home: number
  team_division: null
  unavailable: boolean
  win: number
}

export interface Bootstrap {
  element_stats: ElementStats[]
  element_types: ElementTypes[]
  elements: Element[]
  events: Event[]
  game_settings: GameSettings
  phases: Phase[]
  teams: Team[]
  total_players: number
}

export interface LiveElementStats {
  minutes: number
  goals_scored: number
  assists: number
  clean_sheets: number
  goals_conceded: number
  own_goals: number
  penalties_saved: number
  penalties_missed: number
  yellow_cards: number
  red_cards: number
  saves: number
  bonus: number
  bps: number
  influence: string
  creativity: string
  threat: string
  ict_index: string
  total_points: number
  in_dreamteam: boolean
}

export interface LiveElementExplainStat {
  [key: string]: any
  identifier: StatIdentifier
  points: number
  value: number
}

export interface LiveElementExplain {
  fixture: number
  stats: LiveElementExplainStat[]
}

export interface LiveElement {
  id: number
  stats: LiveElementStats
  explain: LiveElementExplain[]
}

export interface Live {
  elements: LiveElement[]
}

export interface ElementSummaryUpcomingFixture {
  code: number
  difficulty: number
  event: number
  event_name: string
  finished: boolean
  is_home: boolean
  kickoff_time: string
  minutes: number
  provisional_start_time: boolean
  team_a: number
  team_a_score: number | null
  team_h: number
  team_h_score: number | null
}

export interface ElementSummaryFixture {
  assists: number
  bonus: number
  bps: number
  clean_sheets: number
  creativity: string
  element: number
  fixture: number
  goals_conceded: number
  goals_scored: number
  ict_index: string
  influence: string
  kickoff_time: string
  minutes: number
  opponent_team: number
  own_goals: number
  penalties_missed: number
  penalties_saved: number
  red_cards: number
  round: number
  saves: number
  selected: number
  team_a_score: number
  team_h_score: number
  threat: string
  total_points: number
  transfers_balance: number
  transfers_in: number
  transfers_out: number
  value: number
  was_home: boolean
  yellow_cards: number
}

export interface ElementSummarySeason {
  assists: number
  bonus: number
  bps: number
  clean_sheets: number
  creativity: string
  element_code: number
  end_cost: number
  goals_conceded: number
  goals_scored: number
  ict_index: string
  influence: string
  minutes: number
  own_goals: number
  penalties_missed: number
  penalties_saved: number
  red_cards: number
  saves: number
  season_name: string
  start_cost: number
  threat: string
  total_points: number
  yellow_cards: number
}

export interface ElementSummary {
  id: number
  fixtures: ElementSummaryUpcomingFixture[]
  history: ElementSummaryFixture[]
  history_past: ElementSummarySeason[]
}

export interface FixtureStatMap {
  value: number
  element: number
}

export interface FixtureStat {
  identifier: StatIdentifier
  a: FixtureStatMap[]
  h: FixtureStatMap[]
}

export interface Fixture {
  code: number
  event: number
  finished: boolean
  finished_provisional: boolean
  id: number
  kickoff_time: string
  minutes: number
  provisional_start_time: boolean
  started: boolean
  team_a: number
  team_a_score: number | null
  team_h: number
  team_h_score: number | null
  stats: FixtureStat[]
  team_h_difficulty: number
  team_a_difficulty: number
}

export enum EventStatusDayPoints {
  LIVE = 'l',
  PROVISIONAL = 'p',
  CONFIRMED = 'r',
}

export interface EventStatusDay {
  bonus_added: boolean
  date: string
  event: number
  points: EventStatusDayPoints
}

export interface EventStatus {
  status: EventStatusDay[]
  leagues: string
}

export interface EntrySeasonHistory {
  rank: number
  season_name: string
  total_points: number
}

export interface EntryHistory {
  chips: EntryChipPlay[]
  current: EntryEventHistory[]
  past: EntrySeasonHistory[]
}

export interface EntryEventHistory {
  bank: number
  event: number
  event_transfers: number
  event_transfers_cost: number
  overall_rank: number
  points: number
  points_on_bench: number
  rank: number
  rank_sort: number
  total_points: number
  value: number
}

export interface EntryEventPick {
  element: number
  is_captain: boolean
  is_vice_captain: boolean
  multiplier: number
  position: number
}

export interface EntryEvent {
  active_chip: ChipName | null
  automatic_subs: any[]
  entry_history: EntryEventHistory
  picks: EntryEventPick[]
}

export class IsUpdatingError extends Error {
  constructor() {
    super('https://fantasy.premierleague.com is updating')

    this.name = this.constructor.name

    Error.captureStackTrace(this, this.constructor)
  }
}

/**
 * Fetch with error handling specific for the Fantasy Premier League API.
 * @param info URL or Request.
 * @param init Fetch init options.
 * @return The fetch response object.
 */
async function fetchWithGuards(info: RequestInfo, init?: RequestInit) {
  try {
    const response = await fetch(info, init)

    if (response.status === 503) {
      throw new IsUpdatingError()
    } else if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }

    return response
  } catch (error) {
    throw error
  }
}

/**
 * Fetch bootstrap data for the official web app.
 * @return Static bootstrap data.
 */
export async function fetchBootstrap(): Promise<Bootstrap> {
  try {
    const response = await fetchWithGuards(
      'https://fantasy.premierleague.com/api/bootstrap-static/',
    )

    return response.json()
  } catch (error) {
    throw error
  }
}

/**
 * Fetch data for an element.
 * @param elementId ID of a player.
 */
export async function fetchElementSummary(
  elementId: number,
): Promise<ElementSummary> {
  try {
    const response = await fetchWithGuards(
      `https://fantasy.premierleague.com/api/element-summary/${elementId}/`,
    )
    const data = await response.json()

    data.id = elementId

    return data
  } catch (error) {
    throw error
  }
}

/**
 * Fetch entry event data (picks, transfers, etc.).
 * @param entryId ID of an entry team.
 * @param eventId ID of a gameweek.
 */
export async function fetchEntryEvent(
  entryId: number,
  eventId: number,
): Promise<EntryEvent> {
  try {
    const response = await fetchWithGuards(
      `https://fantasy.premierleague.com/api/entry/${entryId}/event/${eventId}/picks/`,
    )

    return response.json()
  } catch (error) {
    throw error
  }
}

/**
 * Fetch current event status.
 */
export async function fetchEventStatus(): Promise<EventStatus> {
  try {
    const response = await fetchWithGuards(
      'https://fantasy.premierleague.com/api/event-status',
    )

    return response.json()
  } catch (error) {
    throw error
  }
}

/**
 * Fetch all fixtures or for a specific event.
 * @param eventId ID of a gameweek.
 */
export async function fetchFixtures(eventId?: number): Promise<Fixture[]> {
  try {
    let uri = 'https://fantasy.premierleague.com/api/fixtures/'
    let response

    if (eventId !== undefined) {
      uri = `https://fantasy.premierleague.com/api/fixtures?event=${eventId}`
    }

    response = await fetchWithGuards(uri)

    return response.json()
  } catch (error) {
    throw error
  }
}

/**
 * Fetch live data for a gameweek.
 * @param eventId ID of a gameweek.
 */
export async function fetchLive(eventId: number): Promise<Live> {
  try {
    const response = await fetchWithGuards(
      `https://fantasy.premierleague.com/api/event/${eventId}/live/`,
    )

    return response.json()
  } catch (error) {
    throw error
  }
}

/**
 * Add a player to the current users watchlist.
 * @param elementCode Code of a player.
 */
export async function addToWatchList(elementCode: number): Promise<boolean> {
  const response = await fetchWithGuards(
    `https://fantasy.premierleague.com/api/watchlist/${elementCode}/`,
    {
      method: 'POST',
    },
  )

  return response.status === 201
}

/**
 * Remove a player from the current users watchlist.
 * @param elementCode Code of a player.
 */
export async function removeFromWatchList(
  elementCode: number,
): Promise<boolean> {
  const response = await fetchWithGuards(
    `https://fantasy.premierleague.com/api/watchlist/${elementCode}/`,
    {
      method: 'DELETE',
    },
  )

  return response.status === 204
}

/**
 * Fetch classic league standings page.
 * @param leagueId ID of a classic league.
 * @param options Page options.
 * @param options.pageStandings Page number of standings.
 * @param options.pageNewEntries Page number of new entries.
 * @param options.phase Phase ID.
 */
export async function fetchClassicLeague(
  leagueId: number,
  { pageStandings, pageNewEntries, phase } = {
    pageStandings: 1,
    pageNewEntries: 1,
    phase: 1,
  },
) {
  try {
    const response = await fetchWithGuards(
      // tslint:disable-next-line
      `https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/?page_new_entries=${pageNewEntries}&page_standings=${pageStandings}&phase=${phase}`,
    )

    return response.json()
  } catch (error) {
    throw error
  }
}

/**
 * Fetch an entrys history.
 * @param entryId ID of an entry team.
 */
export async function fetchEntryHistory(
  entryId: number,
): Promise<EntryHistory> {
  try {
    const response = await fetchWithGuards(
      `https://fantasy.premierleague.com/api/entry/${entryId}/history/`,
    )

    return response.json()
  } catch (error) {
    throw error
  }
}

/**
 * Fetch the logged in user.
 */
export async function fetchCurrentUser() {
  try {
    const response = await fetchWithGuards(
      'https://fantasy.premierleague.com/api/me/',
    )

    return response.json()
  } catch (error) {
    throw error
  }
}

/**
 * Fetch the team of the logged in user.
 * @param entryId ID of an entry team.
 */
export async function fetchMyTeam(entryId: number) {
  try {
    const response = await fetchWithGuards(
      `https://fantasy.premierleague.com/api/my-team/${entryId}/`,
    )

    return response.json()
  } catch (error) {
    throw error
  }
}

/* browser:end */

/**
 * Log in and fetch a cookiejar with session (Node only).
 * @param login E-mail
 * @param password Password
 */
export async function fetchSession(login: string, password: string) {
  try {
    const cookieJar = new CookieJar()
    const fetchWithCookieJar = fetchCookie(fetch, cookieJar)
    const formData = new FormData()

    formData.append('login', login)
    formData.append('password', password)
    formData.append('app', 'plfpl-web')
    formData.append('redirect_uri', 'https://fantasy.premierleague.com/a/login')

    await fetchWithCookieJar(
      'https://users.premierleague.com/accounts/login/',
      {
        method: 'POST',
        body: formData,
      },
    )

    if (
      cookieJar
        .getCookieStringSync('https://premierleague.com')
        .includes('pl_profile')
    ) {
      return cookieJar
    } else {
      throw new Error('Wrong credentials')
    }
  } catch (error) {
    throw error
  }
}
