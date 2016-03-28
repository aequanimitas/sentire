var express = require('express');
var models = require('../../db');
var router = express.Router();

router.route('/').get(function(req, res) {
  if(req.query.author) {
  models.knex('author')
    .join('entry', 'author.authorId', 'entry.authorIdFk')
    .select('author.name', 'entry.text')
    .where('author.name', '=', req.query.author)
    .then(function(entries) {
      if (entries.length < 1) {
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
    });
  } else if (req.query.book) {
  models.knex('book')
    .join('entry', 'book.bookId', 'entry.bookIdFk')
    .select('book.name', 'entry.text')
    .where('book.name', '=', req.query.book)
    .then(function(entries) {
      if (entries.length < 1) {
	      console.log('here');
        res.status(204).json({
          error: false, 
          data: {
            message: 'No entries from book ' + req.params.book
          }
        });
      } else {
        res.json({data: entries});
      }
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).json({error: true, data: {message: 'server error'}});
    });
	  
  } else {
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
  }
});

module.exports = router;
