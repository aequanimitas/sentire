var express = require('express');
var session = require('express-session');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
  name: 'sentire-session-cookie-id',
  secret: 'sentrie-session-secret',
  resave: true,
  saveUninitialized: true
}));

if (process.env.NODE_ENV === 'development') {

  app.use(require('morgan')('dev'));
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
} else {
  app.use(express.static(__dirname + '/dist'))
  app.disable('x-powered-by')
  app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/dist/index.html')
  })
}

app.use('/api', require('./routes'));

app.listen(process.env.PORT || 3000, function() {
  console.log('server listening at port ' + this.address().port);
});
