import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    userId: '',
    userToken: '',
    message: 'Hello Vuex Store'
  }
}

export default new Vuex.Store({
  state: getDefaultState(),
  mutations: {
    updateUser (state, user) {
      state.userId = user.userId
      state.userToken = user.userToken
    },
    reset (state) {
      Object.assign(state, getDefaultState())
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
