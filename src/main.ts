import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
axios.defaults.baseURL = 'http://176.107.133.176:8080/api';

createApp(App).use(store).use(router).mount('#app')
