import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    count: 0,
    vradio: 0,
    isLogin: false
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    setVradio(state, value) {
      state.vradio = value
    },
    SET_LOGIN_STATE(state, isLoggedIn) {
      state.isLogin = isLoggedIn;
    }
  },
  actions: {
    incrementAsync(context) {
      setTimeout(() => {
        context.commit('increment')
      }, 1000)
    },
    setVradioAsync(context, value) {
      setTimeout(() => {
        context.commit('setVradio', value)
      }, 1000)
    },
    login({ commit }) {
      // do the login logic here
      commit('SET_LOGIN_STATE', true);
    },
    logout({ commit }) {
      // do the logout logic here
      commit('SET_LOGIN_STATE', false);
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
    vradio(state) {
      return state.vradio
    }
  }
})
