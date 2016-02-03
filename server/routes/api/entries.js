var express = require('express');
var models = require('../../db/models');
var router = express.Router();

router.route('/').get(function(req, res) {
  models.entries
    .forge()
    .fetch({withRelated: ['author', 'book', 'chapter']})
    .then(function(collection) {
      res.json({data: collection.toJSON()});
    })
    .catch(function(err) {
      console.log('inside root');
      res.status(500).json({error: true, data: {message: 'server error'}});
    })
});

router.route('/author/:name').get(function(req, res) {
  models.knex
    .from('entry')
    .innerJoin('authors', 'entry.author_id', 'authors.id')
    .where('authors.name', '=', req.params.name)
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
