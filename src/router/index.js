import VueRouter from 'vue-router'
import Registration from '../components/Registration.vue'
import Login from '../components/Login.vue'
import store from '../store'
import Dashboard from '../components/Dashboard.vue';
import Landing from '../components/Landing.vue'
import Authors from '../components/Authors.vue'
import Invite from '../components/Invite.vue'
import RatingCenter from '../components/RatingCenter.vue'
import Ratedbefore from '../components/Ratedbefore.vue'
import Working from '../components/Working.vue'
import UserDegustations from '../components/degustations/UserDegustations.vue';
import Degustation from '../components/Degustation.vue';
import CreateDegustations from '../components/degustations/createDegustations.vue';
import Rating from '../components/Rating.vue';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    meta:{requireAuth:false}
  },
  {
    path: '/auth/:provider/callback',
    component: {
      template: '<div class="auth-component"></div>'
    },
    meta:{requireAuth:false}
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
    path:'/registration',
    name:'Registration',
    component:Registration,
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
    path:'/ratedbefore',
    name:'Ratedbefore',
    component:Ratedbefore,
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
      },
      {
        path:'/createDegustations',
        name:'CreateDegustations',
        component:CreateDegustations,
        meta:{requireAuth:true, name: "Nowa degustacja"}
      },
      {
        path:'/degustation/:id',
        name:'Degustacja',
        component:Degustation,
        meta:{requireAuth:true}
      },
      {
        path:'/invite',
        name:'Invite',
        component:Invite,
        meta:{requireAuth:true}
      }, 
      {
        path:'/ratingcenter',
        name:'RatingCenter',
        component:RatingCenter,
        meta:{requireAuth:true}
      },   
    ]
  }
];

const router = new VueRouter({
  mode:'history',
  routes
})

router.beforeEach((to,from,next) =>{

  
  if(to.matched.some(record => record.meta.requireAuth))
  {
      const auth = store.getters.isLoggedIn;
      console.log(auth);
      if(!auth)
        next({name:"Login"});
      else
        next();
  }
  else
    next();
});

export default router