import { vuexfireMutations, firestoreAction } from 'vuexfire'
import firebase from '@/firebase'

const state = {
  isModalOpened: false,
  tattoos: []
}

const getters = {
  isModalOpened: (state) => state.isModalOpened
}

const mutations = {
  TOGGLE_MODAL: (state) => (state.isModalOpened = !state.isModalOpened),
  ADD_TATTOO: (state, tattoo) => state.tattoos.push(tattoo),
  REMOVE_TATTOO: (state, tattooId) =>
    (state.tattoos = state.tattoos.filter((item) => item.id !== tattooId)),
  ...vuexfireMutations
}

const actions = {
  toggleModal: ({ commit }) => commit('TOGGLE_MODAL'),
  addTattoo: ({ commit }, tattoo) => commit('ADD_TATTOO', tattoo),
  removeTattoo: ({ commit }, tattooId) => commit('REMOVE_TATTOO', tattooId),
  bindTattoos: firestoreAction(({ bindFirestoreRef }) =>
    bindFirestoreRef('tattoos', firebase.firestore().collection('tattoos'))
  ),
  unbindTattoos: firestoreAction(({ unbindFirestoreRef }) =>
    unbindFirestoreRef('todos')
  )
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
