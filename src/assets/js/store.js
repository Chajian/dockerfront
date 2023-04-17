import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    count: 0,
    vradio: 0
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
