var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./webpack.config.base');

config.entry = config.entry.concat(['webpack-hot-middleware/client']);
config.module.loaders = config.module.loaders.concat([{ test: /\.js$/, loader: 'react-hot!babel', exclude: /node_modules/ }]);
config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
]);
module.exports = config;
