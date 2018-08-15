var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js',

  target: 'node',

  resolve: {
    extensions: ['', '.js']
  },

  output: {
    path: './dist',
    filename: 'index.js',
    library: 'MaterialIcon',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/
      }
    ]
  },

  externals: [nodeExternals()]
};
