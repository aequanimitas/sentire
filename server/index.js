var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpack = require('webpack');
var config = require('../webpack.config');
var app = express();
var compiler = webpack(config);
var bodyParser = require('body-parser');

// place persistence here temporarily

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(webpackDevMiddleware(compiler, { 
  noInfo: true, stats: { colors: true }, publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use('/api', require('./routes/api'));

app.listen(process.env.PORT || 3000, function() {
  console.log("server listening at port " + this.address().port);
});
