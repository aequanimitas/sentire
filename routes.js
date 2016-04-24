var express = require('express');
var models = require('./db');
var router = express.Router();
var entries = express.Router();

entries.get('/', function(req, res) {
  models.knex('entry')
    .join('author', 'author.authorId', 'entry.authorIdFk')
    .join('book', 'book.bookId', 'entry.bookIdFk')
    .select([
      'author.name as author', 
      'entry.text',
      'book.name as bookTitle',
      'entry.entryId as id'
    ])
    .orderByRaw('random()')
    .limit(parseInt(req.query.endEntry, 10))
    .offset(parseInt(req.query.startEntry, 10))
    .then(function(collection) {
      res.json({data: collection});
    });
});

router.use('/entries', entries);

module.exports = router;
