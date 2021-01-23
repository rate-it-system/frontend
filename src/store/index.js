import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    user:{},
    token:''
  },
  mutations: {
    setUser(state, user){
      state.user = user;
      },
    setToken(state,token){
      state.token = token;
    },
    removeUser(state){
        state.user = {};
        state.token = ''
    }
  },
  getters:{
    isLoggedIn: state => {
      return state.user != null && state.token !== '';
    },
    token: state => state.token,
    tokenHeader: state => "Bearer " + state.token
  },
  actions: {
    login({commit}, user){
      commit('setUser',user);
    },
    logout({commit}){
      commit('removeUser');
    }
  }
})


export default store;