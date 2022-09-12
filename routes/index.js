var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.send("<h1>Hello World</h1>");
  res.render('index', { title: 'Express' });
});

module.exports = router;
