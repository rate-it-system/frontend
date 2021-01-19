import Vue from "vue";
import VueRouter from "vue-router";
import Guest from "../views/Guest.vue";
import Dashboard from "../views/Dashboard.vue";
import CreateDegustation from "../views/CreateDegustation.vue";

Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        name: "Home",
        component: Guest,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/createDegustation",
        name: "DreateDegustation",
        component: CreateDegustation,
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
