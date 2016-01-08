'use strict'
var webpack = require("webpack");
var vue = require("vue-loader");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	debug : true,
	entry : ["./src/main.js"],
	output : {
		path : __dirname + "/dist",
		filename : "build.js"
	},
	module : {
		loaders : [{
			test : /\.vue$/,
			loader : vue.withLoaders({
				css : ExtractTextPlugin.extract(
					"style-loader", "css-loader?sourceMap!sass-loader!cssnext-loader"
				)
			})
		},{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                "style-loader", "css-loader?sourceMap!cssnext-loader")
        }, {
            test: /\.(jpg|png|gif)$/,
            loader: "file-loader?name=images/[hash].[ext]"
        }, {
			test: /\.(html|tpl)$/,
            loader: 'html-loader'
		}]
	},
	plugins : [
		new ExtractTextPlugin("style.css", {
	        allChunks: true,
	        disable: false
	    }),
		new webpack.ProvidePlugin({$:"webpack-zepto"})
	],
	watch : true
}