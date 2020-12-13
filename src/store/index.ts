import { StoreState } from 'vue'
import { createStore } from 'vuex'
import { User } from '@/models/User';

export default createStore<StoreState>({
  state: {
    user:null
  },
  mutations: {
    setUser(state, user: User){
      state.user = user;
      },
      removeUser(state){
        state.user = null;
      }
  },
  getters:{
    isLoggedIn(state): boolean {
      return state.user != null;
    }
  },
  actions: {
  },
  modules: {
  }
})


