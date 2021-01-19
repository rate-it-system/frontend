import Vue from "vue";
import VueRouter from "vue-router";
import Guest from "../views/Guest.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Guest",
    component: Guest
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
