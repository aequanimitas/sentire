var express = require('express');
var models = require('../../db/models');
var router = express.Router();

router.use('/entries', require('./entries'));

module.exports = router;
