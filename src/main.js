import Vue from 'vue'
import App from './App.vue'

import Loading from './packages/loading'
import Alert from './packages/alert'
Vue.use(Loading)
Vue.use(Alert)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
