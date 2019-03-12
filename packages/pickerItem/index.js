import PickerItem from './src/index'

PickerItem.install = function (Vue) {
  Vue.component(PickerItem.name, PickerItem)
}

export default PickerItem