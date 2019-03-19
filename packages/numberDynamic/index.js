import NumberDynamic from './src'
NumberDynamic.install = function (Vue) {
  Vue.component(NumberDynamic.name, NumberDynamic)
}