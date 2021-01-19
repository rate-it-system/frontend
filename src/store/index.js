import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    namespace: true,
    state: {
        token: null,
        user: null,
        messages: []
    },
    mutations: {
        SET_TOKEN(state, token){
            state.token = token;
        },
        SET_USER(state, user){
            state.user = user;
        }
    },
    actions: {
        async login({dispatch}, credentials) {

            const response = await axios.post("login", credentials);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
            dispatch('attempt', response.data.token)
        },

        async attempt({ commit}, token){
            commit('SET_TOKEN', token);

            try {
                const response = await axios.get('user');
                commit('SET_USER', response.data);
            } catch (e){
                console.log("nok");
            }
        }
    },
    modules: {}
});
