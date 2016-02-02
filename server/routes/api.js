var express = require('express');
var knex = require('knex')(require('../../knexfile').development);
var Bookshelf = require('bookshelf')(knex);
var router = express.Router();

router.route('/entries')
  .get(function(req, res) {
    var author = Bookshelf.Model.extend({ tableName: 'authors' });
    var book = Bookshelf.Model.extend({ tableName: 'books' });
    var chapter = Bookshelf.Model.extend({ tableName: 'chapter' });
    var entry = Bookshelf.Model.extend({ 
      tableName: 'entry',
      author: function() {
        return this.belongsTo(author);
      },
      book: function() {
        return this.belongsTo(book);
      },
      chapter: function() {
        return this.belongsTo(chapter);
      }
    });
    var authors = Bookshelf.Collection.extend({ model: author });
    var entries = Bookshelf.Collection.extend({ model: entry });

    entries
      .forge()
      .fetch({withRelated: ['author', 'book', 'chapter']})
      .then(function(collection) {
        res.json({data: collection.toJSON()});
      });
  });

router.route('/entries/author/:id')
  .get(function(req, res) {
    var author = Bookshelf.Model.extend({ tableName: 'authors' });
    var book = Bookshelf.Model.extend({ tableName: 'books' });
    var chapter = Bookshelf.Model.extend({ tableName: 'chapter' });
    var entry = Bookshelf.Model.extend({ 
      tableName: 'entry',
      author: function() {
        return this.belongsTo(author);
      },
      book: function() {
        return this.belongsTo(book);
      },
      chapter: function() {
        return this.belongsTo(chapter);
      }
    });
    entry.query('where', 'author_id', '=', req.params.id)
      .fetchAll({withRelated: ['author', 'book', 'chapter']})
      .then(function(entries) {
        res.json({error: false, data: entries.toJSON()});
      });
  });

module.exports = router;
module.exports = router;
