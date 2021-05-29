var express = require("express");
var Router = express.Router();
var db = require('../models/db');

Router.get("/user",(req,res)=>{//路径二
    let data="select * from user where status=1"
    db.exe(data,[],function(err, results, fields){
        console.log(results[0]);
        res.render('user',{user:results}); 
   
    });
});


module.exports = Router;