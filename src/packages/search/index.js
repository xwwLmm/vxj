import Search from './src'

Search.install = function (Vue) {
  Vue.component(Search.name, Search)
}

export default Search