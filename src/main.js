import Vue from 'vue'
import App from './App.vue'
import router from './router'

import All from './index'
import Header from './views/components/Header'

Vue.use(All)
Vue.component('Header', Header)

Vue.config.productionTip = false

new Vue({
  ...App,
  el: '#app',
  router
})
