import 'jest'
export default {
  modules: {
    AuthModule: {
      namespaced: true,
      getters: {
        getUserFirstName: jest.fn(),
        getUserAvatar: jest.fn(),
        isSignedIn: jest.fn()
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
}
