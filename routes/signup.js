var express = require('express');
var router = express.Router();
let User = require('./bean/aaa');
var db = require('../models/db');

router.get('/',function(req,res,next){
    res.render("signup");  
});

router.post('/',(req,res)=>{
    let fun="insert into table user(name,password) value(?,?)"
    let data=[req.body.name,req.body.password];
    db.exe(fun,data,function(err,row){
        if(err){
            console.log(err);
        }else{
            req.session.user = row; 
            res.redirect('/true1');
        }
    })
    //获取前端产生的参数，放入对象
    let user=new User( req.body.name,req.body.password)
    //存入session
    req.session.user = user;
    res.redirect('/true1');
});

module.exports = router;