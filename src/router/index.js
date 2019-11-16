import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/share-calc',
    name: 'share-calc',
    component: () => import(/* webpackChunkName: "share-calc" */ '../views/ShareCalc.vue')
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import(/* webpackChunkName: "calendar" */ '../views/Calendar.vue')
  },
  {
    path: '/contracts',
    name: 'contracts',
    component: () => import(/* webpackChunkName: "contracts" */ '../views/Contracts.vue')
  },
  {
    path: '/buying',
    name: 'buying',
    component: () => import(/* webpackChunkName: "buying" */ '../views/Buying.vue')
  },
  {
    path: '/ore-calc',
    name: 'ore-calc',
    component: () => import(/* webpackChunkName: "ore-calc" */ '../views/OreCalc.vue')
  },
  {
    path: '/shipping',
    name: 'shipping',
    component: () => import(/* webpackChunkName: "shipping" */ '../views/Shipping.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
