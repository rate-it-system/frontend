import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    namespace: true,
    state: {
        token: null,
        user: null,
        messages: []
    },
    getters: {
        authed(state) {
            return state.token && state.user;
        },
        user(state) {
            return state.user;
        },
        messages(state) {
            return state.messages;
        },
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_USER(state, user) {
            state.user = user;
        },
        ADD_MESSAGE(state, message) {
            state.messages.push(message);
        }
    },
    actions: {
        async login({dispatch}, credentials) {
            try {
                const response = await axios.post("login", credentials);
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
                dispatch('attempt', response.data.token);
            } catch (error) {
                if (error.response) {
                    dispatch('addMessage', error.response.data.errors);
                }
            }
        },

        async attempt({commit}, token) {
            commit('SET_TOKEN', token);

            try {
                const response = await axios.get('user');
                commit('SET_USER', response.data);
            } catch (e) {
                commit('ADD_MESSAGE', "error");
                commit('SET_TOKEN', null);
                commit('SET_USER', null);
            }
        },
        async addMessage({commit}, message) {
            commit('ADD_MESSAGE', message);
        }
    },
    modules: {}
});
export default store;