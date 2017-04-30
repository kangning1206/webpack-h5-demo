process.env.NODE_ENV = 'production'
var path = require('path')
var rm = require('rimraf')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('./config')
var webpackConfig = require('./webpack.prod.conf')

console.log(config.build.assetsRoot)

rm(config.build.assetsRoot, err => {
  if (err) 
    throw err

  webpack(webpackConfig, function (err, stats) {
    if (err) 
      throw err
    process
      .stdout
      .write(stats.toString({colors: true, modules: false, children: false, chunks: false, chunkModules: false}) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
  })

})
