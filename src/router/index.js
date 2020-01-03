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
    path: '/buying',
    name: 'buying',
    component: () => import(/* webpackChunkName: "buying" */ '../views/Buying.vue')
  },
  {
    path: '/buyback-calc',
    name: 'buyback-calc',
    component: () => import(/* webpackChunkName: "buyback-calc" */ '../views/BuybackCalc.vue')
  },
  {
    path: '/ore-calc',
    name: 'ore-calc',
    component: () => import(/* webpackChunkName: "ore-calc" */ '../views/OreCalc.vue')
  },
  {
    path: '/share-calc',
    name: 'share-calc',
    component: () => import(/* webpackChunkName: "share-calc" */ '../views/ShareCalc.vue')
  },
  {
    path: '/subway',
    name: 'subway',
    component: () => import(/* webpackChunkName: "subway" */ '../views/Subway.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
