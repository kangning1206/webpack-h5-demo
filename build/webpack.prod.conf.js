var path = require('path')
var webpack = require('webpack')
var config = require('./config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')

var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

var webpackConfig = merge(baseWebpackConfig, {
  devtool: config.build.productionSourceMap
    ? '#source-map'
    : false,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        //use: ExtractTextPlugin.extract(['css-loader', 'stylus-loader']),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'stylus-loader']
        })
        //
      }
    ]
  },
  //插件项
  plugins: [
    // 公共文件提取到common.js文件
    new webpack
      .optimize
      .CommonsChunkPlugin('common'),
    // 引入全局插入
    new webpack.ProvidePlugin({React: 'react'}),
    //允许错误不打断程序
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('[name].css'),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new webpack
      .optimize
      .UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
  ]
})

// if (config.build.productionGzip) {   var CompressionWebpackPlugin =
// require('compression-webpack-plugin')   webpackConfig.plugins.push(     new
// CompressionWebpackPlugin({       asset: '[path].gz[query]',       algorithm:
// 'gzip',       test: new RegExp(         '\\.(' +
// config.build.productionGzipExtensions.join('|') +         ')$'       ),
// threshold: 10240,       minRatio: 0.8     })   ) } if
// (config.build.bundleAnalyzerReport) {   var BundleAnalyzerPlugin =
// require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// webpackConfig.plugins.push(new BundleAnalyzerPlugin()) }

module.exports = webpackConfig
