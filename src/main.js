import Vue from 'vue'
import App from './App.vue'

import Loading from './packages/loading'
import Alert from './packages/alert'
import Toast from './packages/toast'
import Confirm from './packages/confirm'

Vue.use(Loading)
Vue.use(Alert)
Vue.use(Toast)
Vue.use(Confirm)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
