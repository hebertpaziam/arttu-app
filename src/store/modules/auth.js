import firebase from "firebase/app";

const state = {
  user: null
};

const getters = {
  getUserFirstName: ({ user }) =>
    user && user.displayName ? user.displayName.split(" ")[0] : null,
  getUserAvatar: ({ user }) => (user !== null ? user.photoURL : null),
  isSignedIn: ({ user }) => user !== null
};

const mutations = {
  SET_USER: (state, user) => (state.user = user),
  SIGN_OUT: state => (state.user = null)
};

const actions = {
  signInWithGithub: () => {
    const provider = new firebase.auth.GithubAuthProvider();
    provider.addScope("user:read");
    firebase
      .auth()
      .signInWithPopup(provider)
      .catch(error => {
        setTimeout(() => alert(error.message), 500);
      });
  },
  signOut: ({ commit }) => {
    firebase
      .auth()
      .signOut()
      .then(() => commit("SIGN_OUT"));
  },
  listenAuthStateChanged: ({ commit }) =>
    firebase.auth().onAuthStateChanged(user => commit("SET_USER", user))
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
