const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const { BundleStatsWebpackPlugin } = require('bundle-stats');

const baseConfig = {
	entry: './src/index.js',
	mode: 'production',

	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	}
};

module.exports = [
	{
		...baseConfig,
		name: 'umd',
		externals: ['react', 'react-dom'],
		output: {
			path: path.resolve('./dist'),
			filename: 'umd.js',
			library: 'MaterialIcon',
			libraryTarget: 'umd'
		},
		plugins: [new BundleStatsWebpackPlugin()]
	},

	{
		...baseConfig,
		name: 'commonjs',
		target: 'node',
		externals: [webpackNodeExternals()],
		output: {
			path: path.resolve('./dist'),
			filename: 'cjs.js'
		}
	}
];
