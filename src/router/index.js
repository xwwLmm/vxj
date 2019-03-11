import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/tips',
    component: () => import('../views/tips')
  }, {
    path: '/',
    component: () => import('../views/home')
  }, {
    path: '/loading',
    component: () => import('../views/loading')
  }, {
    path: '/switch',
    component: () => import('../views/switch')
  }, {
    path: '/tab',
    component: () => import('../views/tab')
  }, {
    path: '/search',
    component: () => import('../views/search')
  }, {
    path: '/carousel',
    component: () => import('../views/carousel')
  }, {
    path: '/date-range-picker',
    component: () => import('../views/dateRangePicker')
  }, {
    path: '/picker',
    component: () => import('../views/picker')
  }]
})

export default router

