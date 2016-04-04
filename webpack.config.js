var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var CLIENT_PATH = path.resolve(ROOT_PATH, 'client');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.css?$/, loader: 'style!css' },
      { test: /\.js$/, loader: 'react-hot!babel', exclude: /node_modules/ },
      { test: /\.scss?/, loader: 'style!css!sass'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
