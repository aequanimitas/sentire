var express = require('express');
var db = require('../../db');
var router = express.Router();

router.use('/entries', require('./entries'));

module.exports = router;
