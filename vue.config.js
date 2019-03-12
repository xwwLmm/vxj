var path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        import: path.resolve(__dirname, "./src/styles/variable.styl")
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/vxj' : './',
  configureWebpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            test: /[\\/]node_modules[\\/](vue|vuex|vue-router|vxj)/,
            minChunks: 1,
            name: 'vendor'
          }
        }
      },
      runtimeChunk: {
        name: 'manifest',
      }
    }
  }
}