import firebase from '@/firebase'

const db = firebase.firestore()
const storage = firebase.storage()

const state = {
  tattoos: []
}

const getters = {}

const mutations = {
  SET_TATTOOS: (state, tattoos) => (state.tattoos = tattoos),
  REMOVE_TATTOO: (state, tattooId) =>
    (state.tattoos = state.tattoos.filter((item) => item.id !== tattooId))
}

const actions = {
  removeTattoo: ({ commit }, tattooId) => commit('REMOVE_TATTOO', tattooId),
  uploadTattoo: (store, tattoo) => {
    debugger
    const storageRef = storage.ref(`tattoos/${tattoo.source.name}`)
    const uploadTask = storageRef.put(tattoo.source)
    uploadTask.on('state_changed', {
      next: () => {},
      error: (err) => setTimeout(() => alert(err.message || err), 500),
      complete: () => {
        db.collection('tattoos')
          .set({
            title: tattoo.title,
            source: uploadTask.snapshot.downloadURL,
            created_at: firebase.database.ServerValue.TIMESTAMP
          })
          .then(() => alert('tattoo adicionada!'))
          .catch((err) => setTimeout(() => alert(err.message || err), 500))
      }
    })
  },
  bindTattoos: ({ commit }) =>
    db
      .collection('tattoos')
      .orderBy('created_at')
      .get()
      .then((res) => res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      .then((data) => commit('SET_TATTOOS', data))
      .catch((err) => setTimeout(() => alert(err.message || err), 500))
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
