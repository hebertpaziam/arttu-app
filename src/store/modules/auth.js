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
  isSignedIn: ({ auth, user }) =>
    !!auth.access_token && !!auth.token_type && !!auth.scope && !!user.name
};

const mutations = {
  SIGN_IN: (state, { auth, user }) => {
    state.auth = auth;
    state.user = user;
  },
  SIGN_OUT: state => {
    state.auth = {
      access_token: null,
      token_type: null,
      scope: null
    };
    state.user = {
      avatar_url: "",
      name: ""
    };
  }
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
      .then(auth => dispatch("signIn", auth))
      .catch(err => {
        if (err === "bad_verification_code") dispatch("requestAuthorization");
      });
  },

  signIn: ({ commit, getters, dispatch }, auth) => {
    auth = auth || JSON.parse(localStorage.getItem("data-token"));

    if (auth && !getters.isSignedIn) {
      const url = `${process.env.VUE_APP_GITHUB_API}/user`;
      const config = {
        headers: {
          Accept: "application/json;charset=UTF-8",
          Authorization: `${auth.token_type} ${auth.access_token}`
        }
      };

      Axios.get(url, config)
        .then(res => res.data)
        .then(user => {
          localStorage.setItem("data-token", JSON.stringify(auth));
          commit("SIGN_IN", { auth, user });
        })
        .catch(() => dispatch("requestAuthorization"));
    }
  },
  signOut: ({ commit }) => {
    localStorage.removeItem("data-token");
    commit("SIGN_OUT");
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
