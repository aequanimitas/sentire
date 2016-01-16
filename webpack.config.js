var path = require('path');

module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      { test: /\.css?$/, loader: 'style!css' },
      { test: /\.js$/, 
        loader: 'babel', 
        exclude: /node_modules/
      }
    ]
  }
}
