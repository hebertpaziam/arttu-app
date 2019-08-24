import Axios from "axios";

const state = {
  auth: {
    access_token: null,
    token_type: null,
    scope: null
  },
  user: {
    avatar_url: "",
    name: ""
  }
};

const getters = {
  getUserFirstName: ({ user }) =>
    user && user.name ? user.name.split(" ")[0] : null,
  getAuthorization: ({ auth }) => `${auth.token_type} ${auth.access_token}`,
  isAuthenticated: ({ auth, user }) =>
    !!auth.access_token && !!auth.token_type && !!auth.scope && !!user.name
};

const mutations = {
  SET_AUTH_DATA: (state, auth) => (state.auth = auth),
  SET_USER: (state, user) => (state.user = user)
};

const actions = {
  requestAuthorization: () => {
    location.href = `${process.env.VUE_APP_GITHUB_AUTH}/authorize?client_id=${process.env.VUE_APP_GITHUB_CLIENT_ID}&scope=read:user&redirect_uri=${location.protocol}//${location.host}/auth`;
  },

  requestToken: async ({ dispatch }, code) => {
    const url = `${process.env.VUE_APP_GITHUB_AUTH}/access_token`;
    const config = { headers: { Accept: "application/json;charset=UTF-8" } };

    const data = {
      client_id: process.env.VUE_APP_GITHUB_CLIENT_ID,
      client_secret: process.env.VUE_APP_GITHUB_CLIENT_SECRET,
      code: code
    };

    Axios.post(url, data, config)
      .then(({ data }) => {
        if (data.error) throw data.error;
        return data;
      })
      .then(data => dispatch("setAuthData", data))
      .then(() => dispatch("setUser"))
      .catch(err => {
        if (err === "bad_verification_code") dispatch("requestAuthorization");
      });
  },

  setAuthData: ({ commit }, data) => {
    localStorage.setItem("data-token", JSON.stringify(data));
    commit("SET_AUTH_DATA", data);
  },

  setUser: ({ commit, getters, dispatch }) => {
    const dataToken = JSON.parse(localStorage.getItem("data-token"));
    if (dataToken && !getters.isAuthenticated) {
      dispatch("setAuthData", dataToken);
      const url = `${process.env.VUE_APP_GITHUB_API}/user`;
      const config = {
        headers: {
          Accept: "application/json;charset=UTF-8",
          Authorization: getters.getAuthorization
        }
      };

      Axios.get(url, config)
        .then(res => res.data)
        .then(user => commit("SET_USER", user));
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
