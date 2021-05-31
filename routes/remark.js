var express = require("express");
var Router = express.Router();
var db = require('../models/db');

Router.get("/remark",(req,res)=>{//路径二
    let sql="select * from remark where status=1"
    db.exe(sql,[],function(err, results, fields){
        res.render('remark',{remark:results}); 
   
    });
});


module.exports = Router;