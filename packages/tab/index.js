import XTab from './src/index'

XTab.install = function (Vue) {
  Vue.component(XTab.name, XTab)
}

export default XTab