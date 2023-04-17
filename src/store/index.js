import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 定义一个name，以供全局使用
      username: localStorage.getItem('username'),
      password:'',
      isLogin:localStorage.getItem('isLogin'),
      packageData:JSON.parse(localStorage.getItem('packageData')),
      hardwareData:'',
      isLogin: false
  },
  mutations: {
    login(state,user){
      state.username = user.username;
      state.password = user.password;
      state.isLogin = user.isLogin;
    },
    packageAdd(state,packages){
      state.packageData = packages;
    },
    hardwareData(state,hardwareData){
      state.hardwareData = hardwareData;
    },
    SET_LOGIN_STATE(state, isLoggedIn) {
      state.isLogin = isLoggedIn;
    }
  },
  getters: {
    getMessage(state) {
      // 获取修饰后的name，第一个参数state为必要参数，必须写在形参上
      return `hello${state.username}`;
    },
    getLogin(state){
      return state.isLogin;
    }
  },
  actions: {
    login({ commit }) {
      // do the login logic here
      commit('SET_LOGIN_STATE', true);
    },
    logout({ commit }) {
      // do the logout logic here
      commit('SET_LOGIN_STATE', false);
    }
  }
});

export default store;