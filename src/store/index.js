import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    user:{},
    token: localStorage.getItem('auth-token') || ''
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
    tokenHeader: state => "Bearer " + state.token,
    user: state => state.user,
    hasActiveDegustation: state => state.user != null && state.user.degustation_id != null
  },
  actions: {
    login({commit}, user){
      commit('setUser',user);
    },
    logout({commit}){
      commit('removeUser');
      localStorage.removeItem('auth-token');
    },
    saveToken({commit},token){
      commit('setToken',token);
      localStorage.setItem('auth-token',token);
    }
  }
})


export default store;