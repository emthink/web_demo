/**
 * webpack配置文件
 * @Date [2016/12/25]
 */
var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: ['webpack/hot/only-dev-server', path.resolve(__dirname, './app/app.js')],
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js',
		libraryTarget: 'umd',
    	umdNamedDefine: true
	},
	externals: {
	},
	module: {
	    loaders: [{
			test: /\.css$/,
			loader: 'style!css'
	    }, {
			test: /\.less$/,
			loader: 'style!css!less'
	    }, { 
			test: /\.(png|jpg)$/, 
			loader: 'url?limit=25000' 
	    }]
	},
	//其它解决方案配置
    resolve: {
        extensions: ['', '.jsx', '.js']
    },
	//插件项
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};