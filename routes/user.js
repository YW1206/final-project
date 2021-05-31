var express = require("express");
var router = express.Router();
var db = require('../models/db');

router.get("/user",(req,res)=>{//路径二
    let data="select * from user where status=1"
    db.exe(data,[],function(err, results, fields){
        res.render('user',{user:results}); 
   
    });
});

// -------------add---------------------------------
router.get('/add_user',(req,res) => {
    res.render('add_user',{obj:{},id:""});
});

router.post('/add_user',(req,res) => {
    let a="insert into user(name,age,birth,address,email,phone) value(?,?,?,?,?,?) ";
    let b=[req.body.name,req.body.age,req.body.birth,req.body.address,req.body.email,req.body.phone];
    db.exe(a,b,(err,result,fields)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect("/user/user");
        }
})}); 

// -------------delete-----------------------------
router.get('/de_user/:id',(req,res) => {
    let user_id = req.params.id;
    let user_sql="update user set status=0  where id=?";
    db.exe(user_sql,[user_id],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
            res.redirect('/user/user');//重定向到一个页面则需要加斜杠/
        }
    })
});


module.exports = router;