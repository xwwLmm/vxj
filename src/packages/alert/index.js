import Alert from './src'

Alert.install = function (Vue) {
  console.log(Alert.name)
  Vue.component(Alert.name, Alert)
}

export default Alert