import Cell from './src'

Cell.install = function (Vue) {
  Vue.component(Cell.name, Cell)
}

export default Cell