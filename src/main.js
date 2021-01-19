import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
axios.defaults.baseURL = "http://176.107.133.176/api";
axios.defaults.headers.common['Accept'] = 'application/json';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
