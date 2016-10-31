var path = require('path');
var webpack = require('webpack');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
var paths = require('./paths');
var dateFormat = require('dateformat');

var version = require('../package.json').version;
var now = new Date();
var buildTimeStamp = dateFormat(now, "d-mm-yy h:MMtt");

var NODE_ENV = process.env.NODE_ENV || 'development';
var isDev = NODE_ENV === 'development';
var isProd = NODE_ENV === 'production';

console.log(isProd ? "PRODUCTION" : "DEVELOPMENT", "BUILD", "version", version, buildTimeStamp);

var eslintConfig = {
    failOnWarning: false,
    failOnError: false,
    configFile: path.resolve(__dirname,'../.eslintrc.json')	
}

var eslintLoader = {
	test: /\.(js|jsx)$/,
	loader: 'eslint',
	include: paths.appSrc,
	exclude: /(node_modules|dependencies)/,
}

var babelLoader = {
    test: /\.(js|jsx)$/,
    include: paths.appSrc,
    loader: 'babel',
    exclude: /(node_modules|dependencies)/,
    query:{
		"presets": ["es2015", "react"],
		"plugins": [			
			"transform-class-properties",		
			"syntax-object-rest-spread",
			"transform-object-rest-spread",
			"react-hot-loader/babel"		
		]		        	
    }		               
}


var lessLoader = { 
    test: /\.less$/, 
    loader: 'style!css!less' 
} 
var cssLoader = {
    test: /\.css$/,
    loader: 'style-loader!css-loader'
}

var jsonLoader = {
    test:/\.json$/,
    loader: "json-loader"
}		    				
var videoLoader = {
	test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
	loader: 'url',
	query: {
		limit: 10000,
		name: 'media/[name].[ext]'
	}
}		    
var mediaLoader = {
    test: /\.(png|jpg|jpeg|gif|ico|txt|woff|woff2|ttf|eot|svg)$/,
    loader: 'url',
    query: {
    	name: 'media/[name].[ext]',
    	limit: 100000
    }
}


var plugins = [
	new webpack.DefinePlugin({	
		'process.env':{			
	    	'BUILD_VERSION': JSON.stringify(version),	
	    	'BUILD_TIMESTAMP': JSON.stringify(buildTimeStamp),	    	
	    	'PRODUCTION': JSON.stringify(NODE_ENV==="production"),
	    	'DEVELOPMENT': JSON.stringify(NODE_ENV==="development"),	    				
		}			   	    		    		   
	})	    			    
];


var browserPlugins = [
	new webpack.ProvidePlugin({
	    $: "jquery",
	    jQuery: "jquery"
	})
].concat(plugins)



var browserConfig = {

	target: 'web',
	name: 'client',  
    entry: {  	
    	app : paths.appIndex
    },
    output: {        
        path: paths.appBuild,        
        filename: 'js/[name].js', 
        chunkFilename: 'js/[name].js',      
        publicPath: '/'       
    },
    eslint: eslintConfig,     
    module: {		
	    preLoaders: [eslintLoader],		
        loaders: [
			babelLoader,       
       		lessLoader,
			cssLoader,
			jsonLoader,
			videoLoader,
			mediaLoader
		]
    },     
    plugins: browserPlugins,
    node: {        
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};


module.exports = browserConfig
