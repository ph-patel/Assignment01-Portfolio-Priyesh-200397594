var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET about me page */
router.get('/about', function(req, res, next) {
  res.render('aboutme');
});

/* GET project page */
router.get('/project', function(req, res, next) {
  res.render('project');
});

/* GET service page */
router.get('/service', function(req, res, next) {
  res.render('service');
});

/* GET contact me page */
router.get('/contact', function(req, res, next) {
  res.render('contactme');
});

module.exports = router;
