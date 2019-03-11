import PickerItem from './src'

PickerItem.install = function (Vue) {
  Vue.component(PickerItem.name, PickerItem)
}

export default PickerItem