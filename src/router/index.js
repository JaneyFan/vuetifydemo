import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth } from 'firebase/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/editpostsview',
    name: 'editpostsview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EditPostsView.vue')
  },
  {
    path: '/loginview',
    name: 'loginview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LogInView.vue')
  },
  {
    path: '/navguardview',
    name: 'navguardview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NavGuardView.vue'),
    meta: {
      requiresAuth: true
    }  
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    getAuth(),
    (user) => {
      removeEventListener(),
      resolve(user)
    },
    reject
  })
}

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)  
  
  if (requiresAuth) {
   if (getCurrentUser) { 
    next();
  } 
  }

  else {
    next();
  }
  
})

export default router
