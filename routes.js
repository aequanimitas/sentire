var express = require('express');
var models = require('./db');
var router = express.Router();
var entries = express.Router();

var show = function(req, res) {
  models.knex('entry')
    .join('author', 'author.authorId', 'entry.authorIdFk')
    .join('book', 'book.bookId', 'entry.bookIdFk')
    .select([
      'author.name as author', 
      'entry.text',
      'book.name as bookTitle',
      'entry.entryId as id'
    ])
    .limit(parseInt(req.query.entryFetchLimit ? req.query.entryFetchLimit : 10 , 10))
    .offset(parseInt(req.query.startEntry ? req.query.startEntry : 0, 10))
    .then(function(collection) {
      res.json({data: collection});
    });
});

entries.get('/', show)
router.use('/entries', entries);

module.exports = router;
