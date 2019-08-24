const state = {
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
};

const getters = {
  tattoos: state => state.tattoos
};

const actions = {
  addTattoo: ({ commit }, tattoo) => commit("ADD_TATTOO", tattoo),
  removeTattoo: ({ commit }, tattooId) => commit("REMOVE_TATTOO", tattooId)
};

const mutations = {
  ADD_TATTOO: (state, tattoo) => state.tattoos.push(tattoo),
  REMOVE_TATTOO: (state, tattooId) =>
    (state.tattoos = state.tattoos.filter(item => item.id !== tattooId))
};

export default {
  state,
  getters,
  actions,
  mutations
};
