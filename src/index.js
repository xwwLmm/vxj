import Loading from './packages/loading/src'
import Alert from './packages/alert/src'
import Toast from './packages/toast/src'
import Confirm from './packages/confirm/src'
import Switch from './packages/switch/src'
import Cell from './packages/cell/src'
import Tab from './packages/tab/src'
import Carousel from './packages/carousel/src'
import Search from './packages/search/src'
import DateRangePicker from './packages/dateRangePicker/src'

const version = '0.1.1'

const install = function (Vue) {
  Vue.component(Loading.name, Loading)
  Vue.component(Alert.name, Alert)
  Vue.component(Toast.name, Toast)
  Vue.component(Confirm.name, Confirm)
  Vue.component(Switch.name, Switch)
  Vue.component(Cell.name, Cell)
  Vue.component(Tab.name, Tab)
  Vue.component(Carousel.name, Carousel)
  Vue.component(Search.name, Search)
  Vue.component(DateRangePicker.name, DateRangePicker)
}

export default {
  version,
  install,
  Loading,
  Alert,
  Toast,
  Confirm,
  Switch,
  Cell,
  Tab,
  Carousel,
  Search,
  DateRangePicker
}