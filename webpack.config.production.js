var webpack = require('webpack');
var config = require('./webpack.config.base');
config.plugins = config.plugins.concat([
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    output: { comments: false },
    compress: {
      warnings: false,
      screw_ie8: true
    }
  })
]);

config.module.loaders = config.module.loaders.concat([{ test: /\.js$/, loader: 'babel', exclude: /node_modules/ }]);
module.exports = config;
