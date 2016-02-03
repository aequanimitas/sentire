var express = require('express');
var models = require('../models');
var router = express.Router();

router.use('/api', require('./api'))

module.exports = router;
