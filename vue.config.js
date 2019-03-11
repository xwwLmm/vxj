var path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        import: path.resolve(__dirname, "./src/styles/variable.styl")
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/vxj' : ''
}