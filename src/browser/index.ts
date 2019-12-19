import {
  Bootstrap,
  ElementSummary,
  EntryEvent,
  EventStatus,
  Fixture,
  Live,
  EntryHistory,
  Me,
  ClassicLeague,
  H2HLeague,
  H2HLeagueMatches,
  MyTeam,
} from '../types'

/**
 * Validates a response from https://fantasy.premierleague.com.
 * @param response Fetch Response object.
 */
function validateResponse(response: Response): void {
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`)
  }
}

/**
 * Fetch bootstrap data for the official web app.
 * @return Static bootstrap data.
 */
export async function fetchBootstrap(): Promise<Bootstrap> {
  try {
    const response = await fetch(
      'https://fantasy.premierleague.com/api/bootstrap-static/',
    )

    validateResponse(response)

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
    const response = await fetch(
      `https://fantasy.premierleague.com/api/element-summary/${elementId}/`,
    )
    let data

    validateResponse(response)

    data = await response.json()
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
    const response = await fetch(
      `https://fantasy.premierleague.com/api/entry/${entryId}/event/${eventId}/picks/`,
    )

    validateResponse(response)

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
    const response = await fetch(
      'https://fantasy.premierleague.com/api/event-status',
    )

    validateResponse(response)

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

    response = await fetch(uri)

    validateResponse(response)

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
    const response = await fetch(
      `https://fantasy.premierleague.com/api/event/${eventId}/live/`,
    )

    validateResponse(response)

    return response.json()
  } catch (error) {
    throw error
  }
}

/**
 * Add a player to the current users watchlist.
 * @param session Logged in user session.
 * @param elementCode Code of a player.
 */
export async function addToWatchList(elementCode: number): Promise<boolean> {
  const response = await fetch(
    `https://fantasy.premierleague.com/api/watchlist/${elementCode}/`,
    {
      method: 'POST',
    },
  )

  validateResponse(response)

  return response.status === 201
}

/**
 * Remove a player from the current users watchlist.
 * @param session Logged in user session.
 * @param elementCode Code of a player.
 */
export async function removeFromWatchList(
  elementCode: number,
): Promise<boolean> {
  const response = await fetch(
    `https://fantasy.premierleague.com/api/watchlist/${elementCode}/`,
    {
      method: 'DELETE',
    },
  )

  validateResponse(response)

  return response.status === 204
}

/**
 * Fetch classic league standings page.
 * @param session Logged in user session.
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
): Promise<ClassicLeague> {
  try {
    const response = await fetch(
      // tslint:disable-next-line
      `https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/?page_new_entries=${pageNewEntries}&page_standings=${pageStandings}&phase=${phase}`,
    )

    validateResponse(response)

    return response.json()
  } catch (error) {
    throw error
  }
}

/**
 * Fetch H2H league standings page.
 * @param session Logged in user session.
 * @param leagueId ID of a H2H league.
 * @param options Page options.
 * @param options.pageStandings Page number of standings.
 * @param options.pageNewEntries Page number of new entries.
 */
export async function fetchH2HLeagueStandings(
  leagueId: number,
  { pageStandings, pageNewEntries } = {
    pageStandings: 1,
    pageNewEntries: 1,
  },
): Promise<H2HLeague> {
  try {
    const response = await fetch(
      // tslint:disable-next-line
      `https://fantasy.premierleague.com/api/leagues-h2h/${leagueId}/standings/?page_new_entries=${pageNewEntries}&page_standings=${pageStandings}`,
    )

    validateResponse(response)

    return response.json()
  } catch (error) {
    throw error
  }
}

/**
 * Fetch an entrys matches from a H2H league.
 * @param session Logged in user session.
 * @param leagueId ID of the H2H league.
 * @param entryId ID of the entry whos matches should be fetched.
 * @param page Page number to fetch.
 */
export async function fetchH2HMatches(
  leagueId: number,
  entryId: number,
  page: number = 1,
): Promise<H2HLeagueMatches> {
  try {
    const response = await fetch(
      // tslint:disable-next-line
      `https://fantasy.premierleague.com/api/leagues-h2h-matches/league/${leagueId}/?page=${page}&entry=${entryId}`,
    )

    validateResponse(response)

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
    const response = await fetch(
      `https://fantasy.premierleague.com/api/entry/${entryId}/history/`,
    )

    validateResponse(response)

    return response.json()
  } catch (error) {
    throw error
  }
}

/**
 * Fetch the logged in user.
 */
export async function fetchCurrentUser(): Promise<Me> {
  try {
    const response = await fetch('https://fantasy.premierleague.com/api/me/')

    validateResponse(response)

    return response.json()
  } catch (error) {
    throw error
  }
}

/**
 * Fetch the team of the logged in user.
 * @param entryId ID of an entry team.
 */
export async function fetchMyTeam(entryId: number): Promise<MyTeam> {
  try {
    const response = await fetch(
      `https://fantasy.premierleague.com/api/my-team/${entryId}/`,
    )

    validateResponse(response)

    return response.json()
  } catch (error) {
    throw error
  }
}
