var express = require('express');
var router = express.Router();
 

router.get('/', function(req, res, next) {//这里也不能乱写，这里必须对应你之前那个页面，在网站为/的这个页面跳转到blog,不然会成功不了
    res.render('blog');
});


module.exports = router;