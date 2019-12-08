var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about me page */
router.get('/about', function(req, res, next) {
  res.render('aboutme');
});

/* GET contact me page */
router.get('/contact', function(req, res, next) {
  res.render('contactme');
});

module.exports = router;
