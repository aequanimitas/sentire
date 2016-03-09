var express = require('express');
var models = require('../../db');
var router = express.Router();

router.route('/').get(function(req, res) {
  models.knex('entry')
    .join('author', 'author.authorId', 'entry.authorIdFk')
    .join('book', 'book.bookId', 'entry.bookIdFk')
    .select([
        'author.name as author', 
        'entry.text',
        'book.name as bookTitle',
        'entry.entryId as id'
    ])
    .then(function(collection) {
      res.json({data: collection});
    });
});

router.route('/author').get(function(req, res) {
  models.knex('authors')
    .join('entry', 'authors.id', 'entry.author_id')
    .select('authors.name', 'entry.text')
    .where('authors.name', '=', req.query.name)
    .then(function(entries) {
      if (entries.length < 1) {
        console.log('reached');
        res.status(204).json({
          error: false, 
          data: {
            message: 'No entries from author ' + req.params.name
          }
        });
      } else {
        res.json({data: entries});
      }
    })
    .catch(function(err) {
      res.status(500).json({error: true, data: {message: 'server error'}});
    })
});

module.exports = router;
