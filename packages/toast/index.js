import Toast from './src/index'

Toast.install = function (Vue) {
  Vue.component(Toast.name, Toast)
}

export default Toast