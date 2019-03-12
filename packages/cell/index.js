import Cell from './src/index'

Cell.install = function (Vue) {
  Vue.component(Cell.name, Cell)
}

export default Cell