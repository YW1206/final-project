var express = require('express');
var router = express.Router();
var db = require('../models/db');
 

router.get('/', function(req, res, next) {//再次注意，这里的index和路径没什么关系，只是一个html的名字而已
    //真正有关的是app.js里面的路由名字和路由文件里面写的请求方式的路径
    let apple="select * from blog_content where id = (select MAX(id) from blog_content)"
    db.exe(apple,"",(err,data)=>{
      console.log(data);
      res.render('index',{data:data[0]});
    })
  });
 
 
 
 
 
 
 

 

module.exports = router;