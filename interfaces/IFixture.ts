export interface IFixtureStatValues {
	a: { value: number, element: number }[],
	b: { value: number, element: number }[]	
}

export default interface IFixture {
  code: number,
  deadline_time?: string,
  deadline_time_formatted?: string,
  difficulty?: number,
  event: number,
  event_day: number,
  event_name?: string,
  finished: boolean,
  finished_provisional: boolean,
  id: number,
  kickoff_time: string,
  kickoff_time_formatted: string,
  minutes: number,
  opponent_name?: string,
  opponent_short_name?: string,
  provisional_start_time: boolean,
  started?: boolean,
  stats?: {
    goals_scored?: IFixtureStatValues,
    assists?: IFixtureStatValues,
    own_goals?: IFixtureStatValues,
    penalties_saved?: IFixtureStatValues,
    penalties_missed?: IFixtureStatValues,
    yellow_cards?: IFixtureStatValues,
    red_cards?: IFixtureStatValues,
    saves?: IFixtureStatValues,
    bonus?: IFixtureStatValues,
    bps?: IFixtureStatValues
  }[],
  team_a: number,
  team_a_score: number | null,
  team_h: number,
  team_h_score: number | null
}