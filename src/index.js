import Loading from '../packages/loading/src'
import Alert from '../packages/alert/src'
import Toast from '../packages/toast/src'
import Confirm from '../packages/confirm/src'
import Switch from '../packages/switch/src'
import Cell from '../packages/cell/src'
import Tab from '../packages/tab/src'
import Carousel from '../packages/carousel/src'
import Search from '../packages/search/src'
import DateRangePicker from '../packages/dateRangePicker/src'
import PickerItem from '../packages/pickerItem/src'
import DatePicker from '../packages/datePicker/src'
import RegionPicker from '../packages/regionPicker/src'
import Qrcode from '../packages/qrcode/src'
import Progress from '../packages/progress/src'
import NumberDynamic from '../packages/numberDynamic/src'

const pkg = require('../package')

const version = pkg.version

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
  Vue.component(PickerItem.name, PickerItem)
  Vue.component(DatePicker.name, DatePicker)
  Vue.component(RegionPicker.name, RegionPicker)
  Vue.component(Qrcode.name, Qrcode)
  Vue.component(Progress.name, Progress)
  Vue.component(NumberDynamic.name, NumberDynamic)
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
  DateRangePicker,
  PickerItem,
  DatePicker,
  RegionPicker,
  Qrcode,
  Progress,
  NumberDynamic
}