var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connect = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123456',
  data:'table'

});
 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('item');
});

// router.get('/self', function(req, res, next) {
  // res.render('self');
// });
// router.get('/LogRe', function(req, res, next) {
  // res.render('LogRe');
// });


module.exports = router;
