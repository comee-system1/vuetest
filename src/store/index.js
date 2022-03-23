import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: '',
    userToken: ''
  },
  mutations: {
    updateUser (state, user) {
      state.userId = user.userId
      state.userToken = user.userToken
    }
  },
  actions: {
    auth (context, user) {
      context.commit('updateUser', user)
    }
  },
  modules: {
  },
  plugins: [createPersistedState(
    {
      key: 'vuex',
      paths: ['userId', 'userToken'],
      storage: window.sessionStorage
    }
  )]
})
