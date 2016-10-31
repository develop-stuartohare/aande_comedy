var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	contentBase:'./public',
	hot: true,
	historyApiFallback: true,
	noInfo: true,
	stats: {
		colors: true
	},
	open:true,
	proxy:{
		'/api':{
			target:"http://localhost:1337"
		}
	}  
}).listen(3000, 'localhost', function (err) {
	if(err) console.log(err);	
	console.log('Listening at localhost:3000');
});