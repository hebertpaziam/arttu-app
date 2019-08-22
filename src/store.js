import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      avatar: "",
      name: "Daniel",
      isAuthenticated: false
    },
    tattoos: [
      {
        id: 1,
        src: "/images/tattoos/old-school.jpg",
        desc: "OLD SCHOOL"
      },
      {
        id: 2,
        src: "/images/tattoos/blackwork.jpg",
        desc: "BLACKWORK"
      },
      {
        id: 3,
        src: "/images/tattoos/japanese.jpg",
        desc: "JAPANESE"
      },
      {
        id: 4,
        src: "/images/tattoos/traditional.jpg",
        desc: "TRADITIONAL"
      },
      {
        id: 5,
        src: "/images/tattoos/wrench-and-heart.jpg",
        desc: "BLACKWORK"
      },
      {
        id: 6,
        src: "/images/tattoos/tupac.jpg",
        desc: "HIP-HOP"
      }
    ]
  },
  mutations: {
    authenticate() {
      this.state.user.isAuthenticated = true;
    },
    addTattoo(state, tattoo) {
      state.tattoos.push(tattoo);
    },
    removeTattoo(state, tattooId) {
      state.tattoos = state.tattoos.filter(item => item.id !== tattooId);
    }
  }
});
