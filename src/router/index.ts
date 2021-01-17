import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Guest from '../views/Guest.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Guest',
    component: Guest
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
