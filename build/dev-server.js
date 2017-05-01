//https://segmentfault.com/a/1190000006053772
var path = require('path')
var http = require('http');
var express = require('express');
var config = require('./config')
var app = express();
var webpack = require('webpack');
var webpackConfig = require('./webpack.dev.conf');
var compiler = webpack(webpackConfig);
app.use(require('morgan')('short'));

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

debugger

// Step 2: Attach the dev middleware to the compiler & the server
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

// Step 3: Attach the hot middleware to the compiler & the server
app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
}));

// Do anything you like with the rest of your express application.

app.get("/", function (req, res) {
    res.sendFile(resolve('html/index.htm'));
});

if (require.main === module) {
    var server = http.createServer(app);
    server.listen(process.env.PORT || config.dev.port, function () {
        console.log("Listening on %j", server.address());
    });
}