import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    user:null
  },
  mutations: {
    setUser(state, user){
      state.user = user;
      },
      removeUser(state){
        state.user = null;
      }
  },
  getters:{
    isLoggedIn: state => {
      return state.user != null;
    }
  },
  actions: {
  },
  modules: {
  }
})


export default store;