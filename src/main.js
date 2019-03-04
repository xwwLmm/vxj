import Vue from 'vue'
import App from './App.vue'

import Components from '../dist/index.js'
console.log(Components)
Vue.use(Components.Loading)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
