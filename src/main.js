import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import store from './store'
import VueSocialAuth from 'vue-social-auth'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './index.css'



Vue.use(VueSocialAuth,{ providers:{
    github:{
        clientId: process.env.VUE_APP_GITHUB_CLIENT_ID,
        redirectUri: process.env.VUE_APP_GITHUB_CALLBACK
    }
}});
Vue.use(VueAxios, axios)
Vue.use(VueRouter);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");


