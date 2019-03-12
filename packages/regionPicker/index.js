import RegionPicker from './src/index'

RegionPicker.install = function (Vue) {
  Vue.component(RegionPicker.name, RegionPicker)
}

export default RegionPicker