const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'entry.js'),
  output: {
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    filename: 'js-common-tools.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          'presets': ['es2015']
        }
      }
    ]
  },
  node: {
    fs: 'empty'
  }
};
