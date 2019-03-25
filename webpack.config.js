const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

const version = require('./package.json').version;

// Phaser webpack config
const phaserModule = path.join(__dirname, '/node_modules/phaser/');
const phaser = path.join(phaserModule, process.env.NODE_ENV === 'production' ? 'dist/phaser.min.js' : 'dist/phaser.js');

module.exports = {
	output: {
		globalObject: 'this',
		path: path.resolve(__dirname, './docs')
	},
	entry: {
		game: ['./src/game.ts']
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			use: 'babel-loader',
			exclude: /node_modules/
		},
		{
			test: /\.map.js$/,
			use: ["source-map-loader"],
			enforce: "pre"
		},
		{
			test: [/\.vert$/, /\.frag$/],
			use: 'raw-loader'
		},
		{
			test: /\.css$/,
			use: [
				MiniCssExtractPlugin.loader,
				"css-loader"
			]
		},
		{
			test: /phaser\.min\.js$/,
			use: [{
				loader: 'expose-loader',
				options: 'Phaser'
			}]
		},
		{
			test: /\.(eot|svg|ttf|woff|woff2)$/,
			loader: 'file-loader?name=assets/fonts/[name].[ext]'
		},
		]
	},
	plugins: [
		new CleanPlugin(),
		new webpack.DefinePlugin({
			'CANVAS_RENDERER': JSON.stringify(true),
			'WEBGL_RENDERER': JSON.stringify(true)
		}),
		new HtmlWebPackPlugin({
			base: '/foo',
			favicon: './src/favicon.ico',
			template: './src/index.html',
			filename: './index.html',
			buildType: process.env.NODE_ENV,
			version: version,
			chunks: ['game', 'vendor'],
		}),
		new CopyWebpackPlugin([
			{
				from: './assets/',
				to: './assets/',
			},
			{
				from: './src/CNAME',
				to: '.',
			}
		], {}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[name].css',
		})
	],
	resolve: {
		extensions: ['.ts', '.js'],
		alias: {
			'phaser': phaser
		}
	},
	optimization: {
		minimizer: [
			new TerserPlugin(),
			new OptimizeCSSAssetsPlugin()
		],
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'initial'
				}
			}
		}
	},
	watchOptions: {
		ignored: [
			'node_modules',
			'assets/**/*'
		]
	}
};
