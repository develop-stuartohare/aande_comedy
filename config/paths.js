var path = require('path');
var fs = require('fs');

var appDirectory = fs.realpathSync(process.cwd());

function resolveApp(relativePath){
	return path.resolve(appDirectory, relativePath)
}

var paths = {
	appBuild: resolveApp('public'),
	appBuildJS: resolveApp('public/js/'),
	appBuildJSVendor: resolveApp('public/js/vendor.js'),
	appBuildCSS: resolveApp('public/css/'),		
	appPublic: resolveApp('public'),
	appHtml: resolveApp('public/index.html'),
	appIndex: resolveApp("src/index.js"),	
	appSrc: resolveApp('src'),
	appBuildNode: resolveApp('../server/client'),
	appIndexNode: resolveApp("src/index.node.js")
}

module.exports = paths;