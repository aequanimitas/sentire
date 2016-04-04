var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') {

  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpack = require('webpack');
  var config = require('./webpack.config');
  var compiler = webpack(config);
  var middleware = webpackDevMiddleware(compiler, { 
    noInfo: true, stats: { colors: true }, publicPath: config.output.publicPath
  });

  app.use(middleware); 
  app.use(webpackHotMiddleware(compiler));

  app.get('/', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
}

app.use('/api', require('./routes'));

app.listen(process.env.PORT || 3000, function() {
  console.log('server listening at port ' + this.address().port);
});
