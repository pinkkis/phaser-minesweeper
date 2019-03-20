const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production';

// Phaser webpack config
const phaserModule = path.join(__dirname, '/node_modules/phaser/');
const phaser = path.join(phaserModule, 'dist/phaser.min.js');

module.exports = {
	output: {
		globalObject: 'this'
	},
	entry: {
		game: ['./src/game.ts']
	},
	output: {
		path: path.resolve(__dirname, './docs')
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
			test: /\.html$/,
			use: [{
				loader: 'html-loader',
				options: {
					minimize: true
				}
			}]
		},
		{
			test: /\.css$/,
			use: [{
				loader: MiniCssExtractPlugin.loader,
				options: {}
			},
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
		}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'CANVAS_RENDERER': JSON.stringify(true),
			'WEBGL_RENDERER': JSON.stringify(true)
		}),
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html',
			chunks: ['game', 'vendor']
		}),
		new CopyWebpackPlugin([
			{
				from: './assets/',
				to: './assets/',
			},
		], {}),
		new MiniCssExtractPlugin({
			filename: devMode ? '[name].css' : '[name].[hash].css',
			chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
		})
	],
	resolve: {
		extensions: ['.ts', '.js'],
		alias: {
			'phaser': phaser
		}
	},
	optimization: {
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
