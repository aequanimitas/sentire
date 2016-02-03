var express = require('express');
var models = require('../models');
var router = express.Router();

console.log(router.use);

router.route('/entries')
  .get(function(req, res) {
    models.entries
      .forge()
      .fetch({withRelated: ['author', 'book', 'chapter']})
      .then(function(collection) {
        res.json({data: collection.toJSON()});
      })
      .catch(function(err) {
        res.status(500).json({error: true, data: {message: 'server error'}});
      })
  });

router.route('/entries/author/:name')
  .get(function(req, res) {
    models.knex
      .from('entry')
      .innerJoin('authors', 'entry.author_id', 'authors.id')
      .where('authors.name', '=', req.params.name)
      .then(function(entries) { 
        res.json({data: entries});
      });
  });

module.exports = router;
