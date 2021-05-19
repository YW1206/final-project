var express = require('express');
var router = express.Router();
 

router.get('/', function(req, res, next) {//这里的路劲还是写本页面的，这里代表的是首页的页面
    res.render('self');
  });


module.exports = router;