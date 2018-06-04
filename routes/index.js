var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
  res.render('header', { title: 'header' });
});

module.exports = router;
