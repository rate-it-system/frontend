import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../components/Login.vue'
import store from '../store'
import Dashboard from '../components/Dashboard.vue';
import Landing from '../components/Landing.vue'
import Authors from '../components/Authors.vue'
import Working from '../components/Working.vue'
import UserDegustations from '../components/UserDegustations.vue';
import Degustation from '../components/Degustation.vue';
import CreateDegustations from '../components/createDegustations.vue';
import Rating from '../components/Rating.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    meta:{requireAuth:false}
  },
  {
    path:'/degustation',
    name:'Degustation',
    component:Degustation,
    meta:{requireAuth:false, isLogin:false}
  },
  {
    path:'/createDegustations',
    name:'CreateDegustations',
    component:CreateDegustations,
    meta:{requireAuth:false, isLogin:false}
  },
  {
    path:'/authors',
    name:'Authors',
    component:Authors,
    meta:{requireAuth:false, isLogin:false}
  },
  {
    path:'/working',
    name:'Working',
    component:Working,
    meta:{requireAuth:false, isLogin:false}
  },
  {
    path:'/login',
    name:'Login',
    component:Login,
    meta:{requireAuth:false, isLogin:false}
  },
  {
    path:'/rating',
    name:'Rating',
    component:Rating,
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
    ],
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
