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
  }]
})

export default router

