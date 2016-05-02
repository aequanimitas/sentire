var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var CLIENT_PATH = path.resolve(ROOT_PATH, 'client');

module.exports = {
  entry: [
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    pathInfo: true,
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.css?$/, loader: 'style!css' },
      { test: /\.scss?/, loader: 'style!css!sass'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
