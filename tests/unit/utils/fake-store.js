import 'jest'
export default (
  options = {
    getUserFirstName: 'User',
    getUserAvatar: 'user.jpg',
    isSignedIn: false
  }
) => ({
  modules: {
    AuthModule: {
      namespaced: true,
      getters: {
        getUserFirstName: jest.fn(() => options.getUserFirstName),
        getUserAvatar: jest.fn(() => options.getUserAvatar),
        isSignedIn: jest.fn(() => options.isSignedIn)
      },
      actions: {
        signInWithGithub: jest.fn(),
        signOut: jest.fn(),
        listenAuthStateChanged: jest.fn()
      }
    },
    TattooModule: {
      namespaced: true,
      actions: {
        removeTattoo: jest.fn(),
        uploadTattoo: jest.fn(),
        bindTattoos: jest.fn()
      }
    }
  }
})
