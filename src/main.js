import Vue from 'vue'
import App from './App.vue'

import All from './index'

Vue.use(All)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
