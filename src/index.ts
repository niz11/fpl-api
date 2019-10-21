import {
  Bootstrap,
  ElementSummary,
  EntryEvent,
  Fixture,
  Live,
  EventStatus,
} from '../declarations'

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
export async function fetchEntryHistory(entryId: number) {
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
