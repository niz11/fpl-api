import IFixture from '../interfaces/IFixture'
import IElement, { IElementEvent } from '../interfaces/IElement'

export default class Element {
  constructor(element: IElement) {
    this.explain = element.explain.map(x => ({ stats: x.explain, fixture: x.fixture }))
    this.fixtures = element.fixtures
    this.fixtures_summary = element.fixtures_summary
    this.history = element.history
    this.history_past = element.history_past
    this.history_summary = element.history_summary
  }

  explain: {
    stats: {
      assists?: { name: string, points: number, value: number },
      bonus?: { name: string, points: number, value: number },
      bps?: { name: string, points: number, value: number },
      clean_sheets?: { name: string, points: number, value: number },
      goals_conceded?: { name: string, points: number, value: number },
      goals_scored?: { name: string, points: number, value: number },
      minutes?: { name: string, points: number, value: number },
      own_goals?: { name: string, points: number, value: number },
      penalties_missed?: { name: string, points: number, value: number },
      penalties_saved?: { name: string, points: number, value: number },
      red_cards?: { name: string, points: number, value: number },
      saves?: { name: string, points: number, value: number },
      total_points?: { name: string, points: number, value: number },
      yellow_cards?: { name: string, points: number, value: number }
    }[],
    fixture: IFixture[]
  }[]
  fixtures: IFixture[]
  fixtures_summary: IFixture[]
  history: IElementEvent[]
  history_past: {
    assists: number,
    bonus: number,
    bps: number,
    clean_sheets: number,
    creativity: string,
    ea_index: number,
    element_code: number,
    end_cost: number,
    goals_conceded: number,
    goals_scored: number,
    ict_index: string,
    id: number,
    influence: string,
    minutes: number,
    own_goals: number,
    penalties_missed: number,
    penalties_saved: number,
    red_cards: number,
    saves: number,
    season: number,
    season_name: string,
    start_cost: number,
    threat: string,
    total_points: number,
    yellow_cards: number
  }[]
  history_summary: IElementEvent[]
}