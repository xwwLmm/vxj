var path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const PUBLISH = process.env.TARGET === 'lib'
const PROD = process.env.NODE_ENV === 'production'
const plugins = []

if (PROD) {
  plugins.push(new UglifyJsPlugin({
    uglifyOptions: {
      test: /\.js(\?.*)?$/i,
      compress: {
        warnings: false
      }
    },
    sourceMap: false,
    parallel: true
  }))
}

const optimization = !PUBLISH ? {
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
} : {}

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
    plugins,
    optimization
  }
}