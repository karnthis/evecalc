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
    path: '/buyback',
    name: 'buyback',
    component: () => import(/* webpackChunkName: "buyback" */ '../views/Buyback.vue')
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
  {
    path: '/eveseat',
    name: 'eveseat',
    component: () => import(/* webpackChunkName: "eaveseat" */ '../views/Eveseat.vue') 
  },
  {
    path: '/discord',
    name: 'discord',
    component: () => import(/* webpackChunkName: "discord" */ '../views/Discord.vue') 
  },
  {
    path: '/evepraisal',
    name: 'evepraisal',
    component: () => import(/* webpackChunkName: "evepraisal" */ '../views/Evepraisal.vue') 
  },
  {
    path: '/eveeye',
    name: 'eveeye',
    component: () => import(/* webpackChunkName: "eveeye" */ '../views/Eveeye.vue') 
  },
  {
    path: '/request',
    name: 'request',
    component: () => import(/* webpackChunkName: "request" */ '../views/Request.vue') 
  },
  {
    path: '/dotlan',
    name: 'dotlan',
    component: () => import(/* webpackChunkName: "buyback-calc" */ '../views/Dotlan.vue')
  },
  // {
  //   path: '/querytest',
  //   name: 'querytest',
  //   component: () => import(/* webpackChunkName: "request" */ '../views/querytest.vue'),
  //   props: (route) => ({ query: route.query.p })
  // },
]

const router = new VueRouter({
  routes
})

export default router
