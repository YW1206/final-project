var express = require('express');
var router = express.Router();
let User = require('./bean/aaa');

router.get('/',function(req,res,next){
    res.render("signup");  
});

router.post('/',(req,res)=>{
    //获取前端产生的参数，放入对象
    let user=new User( req.body.name,req.body.password)
    //存入session
    req.session.user = user;
    res.redirect('/true1');
});

module.exports = router;