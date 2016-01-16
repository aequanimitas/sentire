var webpack = require('webpack');

var entry = [ './src/index.jsx' ];
var plugins = [];
var isDev = new webpack.DefinePlugin({
  __ISDEV__ : JSON.stringify(JSON.parse(process.env.debug || 'false'))
});

if (process.env.DEBUG) {
  // add dev entries
  entry.unshift('webpack/hot/only-dev-server');
  entry.unshift('webpack-dev-server/client?http://localhost:10000');

  // add plugins
  plugins.push(new webpack.HotModuleReplacementPlugin());
  plugins.push(isDev);
}

module.exports = {
  entry: entry,
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.css$/, loader: 'style-loader!css-loader!'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 10000
  },
  plugins: plugins
};
