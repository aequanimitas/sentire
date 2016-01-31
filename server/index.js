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

app.get('/api/quotes', function(req, res) {
  var knex = require('knex')(require('../knexfile').development);
  var Bookshelf = require('bookshelf')(knex);
  var author = Bookshelf.Model.extend({ tableName: 'authors' });
  var entry = Bookshelf.Model.extend({ 
    tableName: 'entry',
    author: function() {
      return this.belongsTo(author);
    }
  });
  var authors = Bookshelf.Collection.extend({ model: author });
  var entries = Bookshelf.Collection.extend({ model: entry });

  entries
    .forge()
    .fetch({withRelated: ['author']})
    .then(function(collection) {
      res.json({data: collection.toJSON()});
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log("server listening at port " + this.address().port);
});
