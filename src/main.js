import Vue from 'vue'
import App from './App.vue'

import Loading from './packages/loading'
import Alert from './packages/alert'
import Toast from './packages/toast'
import Confirm from './packages/confirm'
import Switch from './packages/switch'
import Cell from './packages/cell'
import Tab from './packages/tab'
import Carousel from './packages/carousel'
import Search from './packages/search'

Vue.use(Loading)
Vue.use(Alert)
Vue.use(Toast)
Vue.use(Confirm)
Vue.use(Switch)
Vue.use(Cell)
Vue.use(Tab)
Vue.use(Carousel)
Vue.use(Search)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
