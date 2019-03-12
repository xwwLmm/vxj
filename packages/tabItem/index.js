import TabItem from './src/index'

TabItem.install = function (Vue) {
  Vue.component(TabItem.name, TabItem)
}

export default TabItem