import request from 'request-promise-native'
import options from '../options'
import { CookieJar } from 'request'

export default async function fetchSession(login: string, password: string) : Promise<CookieJar> {
  try {
    const jar: CookieJar = request.jar()
    const json: boolean = false
    let csrftoken = null

    // Request the frontpage to create a session
    await request('https://fantasy.premierleague.com/', { ...options, jar, json })

    // Extract the csrftoken value from the cookie jar
    csrftoken = jar.getCookies('https://fantasy.premierleague.com/')[0].toString().match(/csrftoken=(\w*)/)
    
    if (csrftoken) {
      csrftoken = csrftoken[1]
    } else {
      throw new Error('csrftoken missing from response')
    }

    // Log the user in to premierleague.com
    // Login get saved to cookie jar for later use
    await request('https://users.premierleague.com/accounts/login/', {
      ...options,
      json,
      jar,
      method: 'POST',
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
    await request('https://fantasy.premierleague.com/a/login', { ...options, jar, json })

    return jar
  } catch (error) {
    throw error
  }
}