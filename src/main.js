import Vue from 'vue'
import App from './App.vue'
import router from './router'

import All from './index'
import Header from './views/components/Header'
import Buttons from './views/components/Buttons'
import Button from './views/components/Button'

Vue.use(All)
Vue.component('Header', Header)
Vue.component('Buttons', Buttons)
Vue.component('Button', Button)

Vue.config.productionTip = false

new Vue({
  ...App,
  el: '#app',
  router
})
