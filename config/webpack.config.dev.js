
var webpack = require('webpack');
var browserConfig = require('./webpack.config');
	    

browserConfig.entry.app = ['webpack-dev-server/client?http://localhost:3000','webpack/hot/only-dev-server','react-hot-loader/patch',  browserConfig.entry.app]
browserConfig.plugins.push( new webpack.HotModuleReplacementPlugin())

module.exports = browserConfig;
