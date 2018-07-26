import { expect } from 'chai'
import { CookieJar } from 'request'
import fplapi from '../index'
import Entry from '../models/Entry'
import Element from '../models/Element'
import EntryHistory from '../models/EntryHistory'
import BootstrapStatic from '../models/BootstrapStatic'
import Cup from '../models/Cup'
import EntryTransfers from '../models/EntryTransfers'
import EntryLeagues from '../models/EntryLeagues'
import ClassicLeaguePage from '../models/ClassicLeaguePage'
import BootstrapDynamic from '../models/BootstrapDynamic'
import Live from '../models/Live'

let session: CookieJar

describe('fetchBootstrapStatic', () => {
  it('should return an object with all bootstrap static data', async () => {
    const data = await fplapi.fetchBootstrapStatic()

    expect(data).to.be.instanceof(BootstrapStatic)
  })
})

describe('fetchLive', () => {
  it('should fetch live data from a specific event', async () => {
    const data = await fplapi.fetchLive(34)

    expect(data).to.be.instanceof(Live)
  })
})

describe('fetchEntry', () => {
  it('should fetch an entry by id', async () => {
    const entry = await fplapi.fetchEntry(550272)

    expect(entry).to.be.instanceof(Entry)
  })
})

describe('fetchElement', () => {
  it('should fetch an element by id', async () => {
    const element = await fplapi.fetchElement(257)

    expect(element).to.be.instanceof(Element)
  })
})

describe('fetchEntryHistory', () => {
  it('should fetch entry history by entry id', async () => {
    const history = await fplapi.fetchEntryHistory(550272)

    expect(history).to.be.instanceof(EntryHistory)
  })
})

describe('fetchEntryCup', () => {
  it('should fetch entry cup by entry id', async () => {
    const cup = await fplapi.fetchEntryCup(550272)

    expect(cup).to.be.instanceof(Cup)
  })
})

describe('fetchEntryTransfers', () => {
  it('should fetch entry transfers by entry id', async () => {
    const transfers = await fplapi.fetchEntryTransfers(550272)

    expect(transfers).to.be.instanceof(EntryTransfers)
  })
})

describe('fetchEntryLeagues', () => {
  it('should fetch entry leagues by entry id', async () => {
    const leagues = await fplapi.fetchEntryLeagues(550272)
    
    expect(leagues).to.be.instanceof(EntryLeagues)
  })
})

describe('fetchClassicLeaguePage', () => {
  it('should fetch a league page', async () => {
    const page = await fplapi.fetchClassicLeaguePage(860994)
    
    expect(page).to.be.instanceof(ClassicLeaguePage)
    expect(page.league).to.be.a('object')
    expect(page.new_entries).to.be.a('object')
    expect(page.standings).to.be.a('object')
    expect(page.update_status).to.be.a('number')    
  })
})

describe('fetchSession', () => {
  it('should fail with wrong credentials', async () => {
    try {
      await fplapi.fetchSession('foo', 'bar')
    } catch (error) {
      expect(error.message).to.equal('User does not exist or credentials mismatch')
    }
  })

  it('should login with the provided credentials', async () => {
    session = await fplapi.fetchSession('jeppews@hotmail.com', 'christina')

    expect(typeof session.getCookies).to.be.equals('function')
    expect(typeof session.getCookieString).to.be.equals('function')
    expect(typeof session.setCookie).to.be.equals('function')
  })
})

describe('fetchBootstrapDynamic', () => {
  it('should fetch bootstrap dynamic', async () => {
    const response = await fplapi.fetchBootstrapDynamic(session)

    expect(response).to.be.instanceof(BootstrapDynamic)
  })
})

describe('requestTransfers', () => {
  it('should request transfers', async () => {
    const response = await fplapi.makeTransfers({
      confirmed: false,
      entry: 550272,
      event: 36,
      freehit: false,
      transfers: [
        {
          element_in: 381,
          element_out: 215,
          purchase_price: 58,
          selling_price: 53
        }
      ],
      wildcard: false
    }, session)

    expect(response).to.be.a('object')
  })
})