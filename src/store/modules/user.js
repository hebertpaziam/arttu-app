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
  authenticate: ({ commit }) => {
    this.$http.get("https://swapi.co/api/people/1").then(data => {
      alert(data);
      commit("AUTHENTICATE");
    });
  }
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
