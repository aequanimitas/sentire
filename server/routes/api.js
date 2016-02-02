var express = require('express');
var models = require('../models');
var router = express.Router();

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

router.route('/entries/author/:id')
  .get(function(req, res) {
    models.entry.query('where', 'author_id', '=', req.params.id)
      .fetchAll({withRelated: ['author', 'book', 'chapter']})
      .then(function(entries) {
        res.json({error: false, data: entries.toJSON()});
      })
      .catch(function(err) {
        res.status(500).json({error: true, data: {message: 'end path should be numeric'}});
      })
  });

module.exports = router;
