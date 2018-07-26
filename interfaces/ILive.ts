export interface IExplaineStat {
  name: string
  points: number
  value: number
}

export interface IFixtureStat {
  element: number
  value: number
}

export default interface ILive {
  [key: string]: any
  elements: {
    [key: number]: any
    explain: [
      {
        assists?: IExplaineStat
        clean_sheets?: IExplaineStat
        goals_conceded?: IExplaineStat
        goals_scored?: IExplaineStat
        minutes?: IExplaineStat
        own_goals?: IExplaineStat
        penalties_missed?: IExplaineStat
        penalties_saved?: IExplaineStat
        red_cards?: IExplaineStat
        saves?: IExplaineStat
        yellow_cards?: IExplaineStat
      },
      number
    ][]
    stats: {
      assists: number
      bonus: number
      bps: number
      clean_sheets: number
      creativity: number
      goals_conceded: number
      goals_scored: number
      ict_index: number
      in_dreamteam: boolean
      influence: number
      minutes: number
      own_goals: number
      penalties_missed: number
      penalties_saved: number
      red_cards: number
      saves: number
      threat: number
      total_points: number
      yellow_cards: number
    }
  }[]
  fixtures: {
    code: number
    deadline_time: Date
    deadline_time_formatted: string
    event: number
    event_day: number
    finished: boolean
    finished_provisional: boolean
    id: number
    kickoff_time: Date
    kickoff_time_formatted: string
    minutes: number
    provisional_start_time: boolean
    started: boolean
    stats: {
      assists: { a: IFixtureStat[], h: IFixtureStat[] }
      bonus: { a: IFixtureStat[], h: IFixtureStat[] }
      bps: { a: IFixtureStat[], h: IFixtureStat[] }
      goals_scored: { a: IFixtureStat[], h: IFixtureStat[] }
      own_goals: { a: IFixtureStat[], h: IFixtureStat[] }
      penalties_missed: { a: IFixtureStat[], h: IFixtureStat[] }
      penalties_saved: { a: IFixtureStat[], h: IFixtureStat[] }
      red_cards: { a: IFixtureStat[], h: IFixtureStat[] }
      saves: { a: IFixtureStat[], h: IFixtureStat[] }
      yellow_cards: { a: IFixtureStat[], h: IFixtureStat[] }
    }
    team_a: number
    team_a_score: number
    team_h: number
    team_h_score: number
  }[]
}