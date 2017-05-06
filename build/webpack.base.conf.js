var path = require('path')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve(dir) {
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
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: [
                    resolve('src'), resolve('test')
                ],
                query: {
                    presets: ['babel-preset-react', 'babel-preset-es2015']
                }
            }, {
                test: /\.styl$/,
                include: [
                    resolve('src')
                ],
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'stylus-loader']
                })
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    //插件项
    plugins: [new ExtractTextPlugin('[name].css')]
}
