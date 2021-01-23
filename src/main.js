import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import store from './store'
import VueSocialAuth from 'vue-social-auth'
import './index.css'

Vue.use(VueSocialAuth,{ providers:{
    github:{
        clientId:'',
        redirectUri: '/auth/github/callback'
    }
}});

Vue.use(VueRouter);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");


