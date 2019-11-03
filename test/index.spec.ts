import { fetchSession } from 'src/node'
import { CookieJar } from 'tough-cookie'

describe('fetchSession', () => {
  it('should return cookiejar with session', async () => {
    const session = await fetchSession('jeppews@hotmail.com', 'christina')
    expect(session).toBeInstanceOf(CookieJar)
    expect(session.getCookieStringSync('https://premierleague.com')).toContain(
      'pl_profile',
    )
  })

  it('should throw error when provided wrong credentials', () => {
    expect(fetchSession('wrong@email.com', 'passwodrd')).rejects.toThrowError(
      'Wrong credentials',
    )
  })
})