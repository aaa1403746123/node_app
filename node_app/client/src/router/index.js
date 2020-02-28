import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/index',
    component: ()=>import('../views/index.vue'),
  },
  {
      path: '/index',
     name:'index',
    component: ()=>import('../views/index.vue'),
    children:[
      {
        path:'',
        component:()=>import('../views/Home.vue')
      },
      {
        path:'home',
        neme:'home',
        component:()=>import('../views/Home.vue')
      },{
        path:'infoshow',
        name:'infoshow',
        component:()=>import('../views/infoshow.vue')
      },{
        path:'foundlist',
        name:'foundlist',
        component:()=>import('../views/foundlist.vue')
      },{
        path:'interlist',
        name:'interlist',
        component:()=>import('../views/interlist.vue')
      }
  ]
  },
  {
    path: '/register',
     name:'register',
    component: ()=>import('../views/register.vue')
  },
  {
    path: '*',
     name:'notfound',
    component: ()=>import('../views/404.vue')
  },
  {
    path: '/login',
     name:'login',
    component: ()=>import('../views/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//路由守卫
router.beforeEach((to,from,next)=>{
  const islogin=localStorage.eleToken ? true :false
  if(to.path=='/login' || to.path=='/register'){
    next()
  }else{
    islogin ? next() :next('/login')
  }
})
export default router
