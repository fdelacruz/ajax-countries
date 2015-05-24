var express = require('express');
var router = express.Router();
var countries = require('../models/countries.json');

/* GET countries listing. */
router.get('/', function(req, res, next) {
	res.send(countries);
});

module.exports = router;
