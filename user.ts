import request from 'request-promise-native'

export class User {
  constructor(jar: any) {
    this._jar = jar
  }

  _jar: any

  async fetchBootstrapDynamic() {
    try {
      const response = request('https://fantasy.premierleague.com/drf/bootstrap-dynamic', { jar: this._jar, json: true })

      return response
    } catch (error) {
      throw error
    }
  }

  async fetchTransfers() {
    try {
      const data = request('https://fantasy.premierleague.com/drf/transfers', { jar: this._jar, json: true })

      return data
    } catch (error) {
      throw error
    }
  }
}

export default async function login(login: string, password: string): Promise<User> {
  try {
    const jar = request.jar()
    let csrftoken = null

    // Request the frontpage to create a session
    const r = await request({
      method: 'GET',
      uri: 'https://fantasy.premierleague.com/',
      jar: jar,
      resolveWithFullResponse: true
    })

    console.log(r.statusCode)

    // Extract the csrftoken value from the cookie jar
    const match = jar.getCookies('https://fantasy.premierleague.com/')[0].toString().match(/csrftoken=(\w*)/)
    
    if (match) {
      csrftoken = match[1]
    } else {
      throw new Error('csrftoken missing from response')
    }

    // Log the user in to premierleague.com
    // Login get saved to cookie jar for later use
    await request({
      method: 'POST',
      uri: 'https://users.premierleague.com/accounts/login/',
      resolveWithFullResponse: true,
      jar: jar,
      simple: false,
      formData: {
        login: login,
        password: password,
        app: 'plfpl-web',
        csrfmiddlewaretoken: csrftoken,
        redirect_uri: 'https://fantasy.premierleague.com/a/login'
      }
    })

    // Check if the pl_profile cookie was set indicating a succesful login
    if (jar.getCookieString('https://fantasy.premierleague.com/a/login').indexOf('pl_profile') < 0) {
      throw new Error('User does not exist or credentials mismatch')
    }

    // Log the user in to fantasy.premierleague.com with the cookie jar
    await request({
      uri: 'https://fantasy.premierleague.com/a/login',
      jar: jar,
      resolveWithFullResponse: true
    })

    return new User(jar)
  } catch (error) {
    throw error
  }
}