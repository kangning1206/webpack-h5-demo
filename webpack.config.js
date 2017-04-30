var path = require("path");
var webpack = require('webpack');
module.exports = {
    //页面入口文件配置
    entry: {
        '__webpack_hmr': 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        'index': './src/app/main.js'
    },
    //入口文件输出配置
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: '/',
        filename: '[name].js'
    },
    // source-map
    //devtool: '#source-map',
    module: {
        //加载器配置
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.js$/,
                //test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
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
    },
    //插件项
    plugins: [
        // 公共文件提取到common.js文件
        new webpack
            .optimize
            .CommonsChunkPlugin('common'),
        // 引入全局插入
        new webpack.ProvidePlugin({React: 'react'}),
        //new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(), // 热加载
        //允许错误不打断程序
        //new webpack.NoErrorsPlugin()
        //允许错误不打断程序
        new webpack.NoEmitOnErrorsPlugin()
    ]
};