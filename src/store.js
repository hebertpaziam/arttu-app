import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      avatar: "",
      name: "Daniel",
      isAuthenticated: true
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
    addTattoo(tattoo) {
      this.state.tattoos = [...this.state.tattoos, tattoo];
    },
    removeTattoo(tattooId) {
      this.state.tattoos = this.state.tattoos.filter(
        item => item.id !== tattooId
      );
    }
  },
  actions: {}
});
