var express = require('express');
var router = express.Router();
var db = require('../models/db');

router.get('/', function(req, res, next) {
    res.render('Logre');
  });

router.post('/',(req,res) => {//这里的路径对应的是？
    let sad="select * from table user where name=? and pass=?"
    let happy=[req.session.name,req.session.password]
    db.exe(sad,happy,(err,row)=>{
        
    })
    let name=req.body.name;
    let password=req.body.password;
    if( req.session.user != undefined 
     && name == req.session.user.name
     && password == req.session.user.password
    ){  
        res.redirect('/true');
    }else if(name =="admin" && password=="admin"
    ){
        res.redirect("/admin")
    }else{
        res.redirect('/404');
    }
});

module.exports = router;