import Progress from './src'

Progress.install = function (Vue) {
  Vue.component(Progress.name, Progress)
}

export default Progress