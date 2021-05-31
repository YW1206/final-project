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
            res.redirect('/user/user');//重定向到一个页面则需要加斜杠/
        }
    })
});

// -------------update---------------------------------
router.get('/up-user',(req,res)=>{ //由于这里的路径出现了问题，所以无法和新增网页的路径匹配上，没有办法跳转过去
    let update_ID=req.query.id;    
    let update_apple="select * from user where id = ?";
    db.exe(update_apple,[update_ID],(err,user)=>{
        if(err){
            console.log(err);
        }else{
            res.render('up-user',{user:user[0]});}//这里打印出来的data是一个数组，所以应该拿到里面的第一个值，再进行传参
            //渲染文件时不需要用/，在重定向和get或post请求方式等才需要使用/
    } )
});
router.post('/up-user',(req,res) => {
    let up_dog="update user set name=?,age=?,birth=?,address=?,email=?,phone=? where id="+req.body.id; 
    let up_cat=[req.body.name,req.body.age,req.body.birth,req.body.address,req.body.email,req.body.phone,req.body.id];
    db.exe(up_dog,up_cat,(err,results,fields)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect("/user/user");
        }
})}); 
 
router.post("/user_query",(req,res)=>{
    let user_banana="select * from user where id=?";
    let user_data=[req.body.user_ID];
    db.exe(user_banana,user_data,(err,reslut)=>{
        if(err){
            console.log(err);
        }else{
            res.render("user_query",{user_detail:reslut});
        }
    })
});


module.exports = router;