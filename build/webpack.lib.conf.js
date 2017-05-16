var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')

var env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : config.build.env

var webpackConfig = merge({
  module: baseWebpackConfig.module,
  resolve: baseWebpackConfig.resolve,
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  entry: {
    'vue-directive-dropdown': '@/directives/dropdown'
  },
  output: {
    path: config.build.libRoot,
    filename: '[name].js',
    library: 'vue-directive-dropdown',
    libraryTarget: 'umd'
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    })
  ]
})


if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
