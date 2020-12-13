import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../components/Login.vue'
import store from '../store'
import Dashboard from '../components/Dashboard.vue';
import Landing from '../components/Landing.vue'
import UserDegustations from '../components/UserDegustations.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    meta:{requireAuth:false}
  },
  {
    path:'/login',
    name:'Login',
    component:Login,
    meta:{requireAuth:false, isLogin:false}
  },
  {
    path:'/dashboard',
    component:Dashboard,
    meta:{requireAuth:true},
    children:[
      {
        path:'',
        name:'MainView',
        component:UserDegustations,
        meta:{name:"Degustacje"}
      }

    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next) =>{

  
  if(to.matched.some(record => record.meta.requireAuth))
  {
      const auth = store.getters.isLoggedIn as boolean;
      if(!auth)
        next({name:"Login"});
      else
        next();
  }
  else
  {
    if(to.matched.some(record => record.meta.isLogin))
      next({name:"Dashboard"});
    else
      next();
  }
});

export default router
