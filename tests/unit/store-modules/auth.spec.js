import 'jest'

import AuthModule from '@/store/modules/auth'

describe('AUTH MODULE', () => {
  beforeEach(() => {
    AuthModule.state = {
      user: {
        displayName: 'John Doe',
        photoURL: 'john-doe.jpg'
      }
    }
  })

  it('GETTERS: getUserFirstName', () => {
    const firstName = AuthModule.getters.getUserFirstName(AuthModule.state)
    expect(firstName).toMatch('John')
  })

  it('GETTERS: getUserFirstName', () => {
    const photoURL = AuthModule.getters.getUserAvatar(AuthModule.state)
    expect(photoURL).toMatch('john-doe.jpg')
  })

  it('GETTERS: isSignedIn', () => {
    const isSignedIn = AuthModule.getters.isSignedIn(AuthModule.state)
    const isSignedOut = AuthModule.getters.isSignedIn({ user: null })

    expect(isSignedIn).toBeTruthy()
    expect(isSignedOut).toBeFalsy()
  })

  it('MUTATIONS: SET_USER', () => {
    let newUser = {
      displayName: 'Jane Doe',
      photoURL: 'jane-doe.jpg'
    }
    AuthModule.mutations.SET_USER(AuthModule.state, newUser)
    expect(AuthModule.state.user).toMatchObject(newUser)
  })

  it('MUTATIONS: SIGN_OUT', () => {
    AuthModule.mutations.SIGN_OUT(AuthModule.state)
    expect(AuthModule.state.user).toBeNull()
  })
})
