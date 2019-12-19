import { config } from 'dotenv'
import {
  fetchSession,
  addToWatchList,
  fetchCurrentUser,
  removeFromWatchList,
  fetchBootstrap,
  fetchElementSummary,
  fetchEntryEvent,
  fetchEventStatus,
  fetchFixtures,
  fetchLive,
  fetchClassicLeague,
  fetchH2HLeagueStandings,
  fetchH2HMatches,
} from 'src/node'
import { CookieJar } from 'tough-cookie'

config()

const code = 103955
const id = 214
const entry = 7958
const event = 1
const leagueId = 967
const h2hLeagueId = 1324784

describe('fetchBootstrap', () => {
  it('fetches bootstrap data', async () => {
    const result = await fetchBootstrap()

    expect(result.element_stats).toBeDefined()
    expect(result.element_types).toBeDefined()
    expect(result.elements).toBeDefined()
    expect(result.events).toBeDefined()
    expect(result.game_settings).toBeDefined()
    expect(result.phases).toBeDefined()
    expect(result.teams).toBeDefined()
    expect(result.total_players).toBeDefined()
  })
})

describe('fetchElementSummary', () => {
  it('fetches element summary', async () => {
    const result = await fetchElementSummary(id)

    expect(result.fixtures).toBeDefined()
    expect(result.history).toBeDefined()
    expect(result.history_past).toBeDefined()
    expect(result.id).toBe(id)
  })
})

describe('fetchEntryEvent', () => {
  it('fetches entry event', async () => {
    const result = await fetchEntryEvent(entry, event)

    expect(result.active_chip).toBeDefined()
    expect(result.automatic_subs).toBeDefined()
    expect(result.entry_history).toBeDefined()
    expect(result.picks).toBeDefined()
  })
})

describe('fetchEventStatus', () => {
  it('fetch event status', async () => {
    const result = await fetchEventStatus()

    expect(result.leagues).toBeDefined()
    expect(result.status).toBeDefined()
  })
})

describe('fetchFixtures', () => {
  it('fetches all fixtures', async () => {
    const result = await fetchFixtures()

    expect(result).toHaveLength(380)
    expect(result[0].id).toBeDefined()
    expect(result[0].kickoff_time).toBeDefined()
    expect(result[0].minutes).toBeDefined()
    expect(result[0].provisional_start_time).toBeDefined()
    expect(result[0].started).toBeDefined()
    expect(result[0].stats).toBeDefined()
    expect(result[0].team_a).toBeDefined()
    expect(result[0].team_a_difficulty).toBeDefined()
    expect(result[0].team_a_score).toBeDefined()
    expect(result[0].team_h).toBeDefined()
    expect(result[0].team_h_difficulty).toBeDefined()
    expect(result[0].team_h_score).toBeDefined()
    expect(result[0].code).toBeDefined()
    expect(result[0].event).toBeDefined()
    expect(result[0].finished).toBeDefined()
    expect(result[0].finished_provisional).toBeDefined()
  })

  it('fetches fixtures for a gameweek', async () => {
    const result = await fetchFixtures(1)

    expect(result).toHaveLength(10)
  })
})

describe('fetchLive', () => {
  it('fetches live data for a gameweek', async () => {
    const result = await fetchLive(1)

    expect(result.elements.length).toBeGreaterThan(0)
  })
})

describe('fetchSession', () => {
  it('throws error when wrong credentials are provided', async () => {
    try {
      await fetchSession('', '')
    } catch (error) {
      expect(error.message).toBe('Wrong credentials')
    }
  })

  it('returns an instance of CookieJar', async () => {
    const session = await fetchSession(
      process.env.LOGIN!,
      process.env.PASSWORD!,
    )

    expect(session).toBeInstanceOf(CookieJar)
  })
})

describe('watchlist', () => {
  let session: CookieJar

  describe('addToWatchList', () => {
    it('can add a player to the watchlist', async () => {
      session = await fetchSession(process.env.LOGIN!, process.env.PASSWORD!)
      const result = await addToWatchList(session, code)
      const user = await fetchCurrentUser(session)

      expect(result).toBe(true)
      expect(user.watched.includes(code)).toBe(true)
    })
  })

  describe('removeFromWatchList', () => {
    it('can remove a player from the watchlist', async () => {
      await addToWatchList(session, code)

      const result = await removeFromWatchList(session, code)
      const user = await fetchCurrentUser(session)

      expect(result).toBe(true)
      expect(user.watched.includes(code)).toBe(false)
    })
  })
})

describe('fetchClassicLeague', () => {
  it('fetches classic league entries', async () => {
    const session = await fetchSession(
      process.env.LOGIN!,
      process.env.PASSWORD!,
    )
    const result = await fetchClassicLeague(session, leagueId)

    expect(result.league).toBeDefined()
    expect(result.league.id).toEqual(leagueId)
    expect(result.new_entries).toBeDefined()
    expect(result.standings).toBeDefined()
  })

  it('throws 404 error when id is invalid', async () => {
    try {
      const session = await fetchSession(
        process.env.LOGIN!,
        process.env.PASSWORD!,
      )

      await fetchClassicLeague(session, 1324784)
    } catch (error) {
      expect(error.message).toBe('404 Not Found')
    }
  })
})

describe('fetchH2HLeagueStandings', () => {
  it('fetches h2h league standings', async () => {
    const session = await fetchSession(
      process.env.LOGIN!,
      process.env.PASSWORD!,
    )
    const result = await fetchH2HLeagueStandings(session, h2hLeagueId)

    expect(result.league).toBeDefined()
    expect(result.league.id).toEqual(h2hLeagueId)
    expect(result.new_entries).toBeDefined()
    expect(result.standings).toBeDefined()
  })

  it('throws 404 error when id is invalid', async () => {
    try {
      const session = await fetchSession(
        process.env.LOGIN!,
        process.env.PASSWORD!,
      )

      await fetchH2HLeagueStandings(session, 967)
    } catch (error) {
      expect(error.message).toBe('404 Not Found')
    }
  })
})

describe('fetchH2HMatches', () => {
  it('fetches h2h league matches', async () => {
    const session = await fetchSession(
      process.env.LOGIN!,
      process.env.PASSWORD!,
    )
    const result = await fetchH2HMatches(session, h2hLeagueId, entry)

    expect(result.has_next).toBeDefined()
    expect(result.page).toBeDefined()
    expect(result.results).toBeDefined()
  })
})
