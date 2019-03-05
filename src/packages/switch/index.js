import Switch from './src'

Switch.install = function (Vue) {
  Vue.component(Switch.name, Switch)
}

export default Switch