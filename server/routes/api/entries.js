var express = require('express');
var models = require('../../db');
var router = express.Router();

router.route('/').get(function(req, res) {
  models.knex('entry')
    .join('authors', 'authors.id', 'entry.author_id')
    .join('books', 'books.id', 'entry.book_id')
    .join('chapter', 'chapter.id', 'entry.chapter_id')
    .select([
        'authors.name as author', 
        'entry.text',
        'books.name as bookTitle',
        'chapter.chapter_title as chapterTitle',
        'chapter.chapter as chapter',
        'entry.id as id'
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
