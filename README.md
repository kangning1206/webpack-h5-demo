$ webpack --display-error-details

$ webpack --config XXX.js   //使用另一份配置文件（比如webpack.config2.js）来打包
 
$ webpack --watch   //监听变动并自动打包
 
$ webpack -p    //压缩混淆脚本，这个非常非常重要！
 
$ webpack -d    //生成map映射文件，告知哪些模块被最终打包到哪里