var path = require('path')
var config = require('../config')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: {
    app: './src/app/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  module: {
    rules: [
          {
              test: /\.css$/,
              loader: 'style-loader!css-loader'
          }, {
              test: /\.(js|jsx)$/,
              loader: 'babel-loader',
              //exclude: /node_modules/,
              include: [resolve('src'), resolve('test')],
              query: {
                  presets: ['babel-preset-react', 'babel-preset-es2015']
              }
          }, {
              test: /\.scss$/,
              loader: 'style!css!sass?sourceMap'
          }, {
              test: /\.(png|jpg)$/,
              loader: 'url-loader?limit=8192'
          }
      ]
  }
}
