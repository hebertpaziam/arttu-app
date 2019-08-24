const state = {
  user: {
    avatar: "",
    name: "Daniel",
    isAuthenticated: false
  }
};

const getters = {
  getUser: state => state.user
};

const actions = {
  authenticate: ({ commit }) => commit("AUTHENTICATE")
};

const mutations = {
  AUTHENTICATE: state => (state.user.isAuthenticated = true)
};

export default {
  state,
  getters,
  actions,
  mutations
};
