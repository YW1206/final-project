var express = require("express");
var router = express.Router();
var db = require('../models/db');

router.get("/remark",(req,res)=>{//路径二
    let sql="select * from remark where status=1"
    db.exe(sql,[],function(err, results, fields){
        res.render('remark',{remark:results}); 
   
    });
});

// -------------add---------------------------------
router.get('/add_remark',(req,res) => {
    res.render('add_remark',{obj:{},id:""});
});

router.post('/add_remark',(req,res) => {
    let remark_A="insert into remark(blogid,userid,username,remarkerid,remarkername,remarktext) value(?,?,?,?,?,?) ";
    let remark_B=[req.body.blogid,req.body.userid,req.body.username,req.body.remarkerid,req.body.remarkername,req.body.remarktext];
    db.exe(remark_A,remark_B,(err,result,fields)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect("/remark/remark");
        }
})}); 

// -------------delete-----------------------------
router.get('/de_remark/:id',(req,res) => {
    let remark_id = req.params.id;
    let remark_sql="update remark set status=0  where id=?";
    db.exe(remark_sql,[remark_id],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/remark/remark');//重定向到一个页面则需要加斜杠/
        }
    })
});

// -------------update---------------------------------
router.get('/up-remark',(req,res)=>{ //由于这里的路径出现了问题，所以无法和新增网页的路径匹配上，没有办法跳转过去
    let remark_ID=req.query.id;    
    let remark_apple="select * from remark where id = ?";
    db.exe(remark_apple,[remark_ID],(err,remark)=>{
        if(err){
            console.log(err);
        }else{
            res.render('new',{remark:remark[0]});}//这里打印出来的data是一个数组，所以应该拿到里面的第一个值，再进行传参
            //渲染文件时不需要用/，在重定向和get或post请求方式等才需要使用/
    } )
});
router.post('/up-remark',(req,res) => {
    let remark_dog="update remark set blogid=?,userid=?,username=?,remarkerid=?,remarkername=?,remarktext=? where id="+req.body.id; 
    let remark_cat=[req.body.blogid,req.body.userid,req.body.username,req.body.remarkerid,req.body.remarkername,req.body.remarktext,req.body.id];
    db.exe(remark_dog,remark_cat,(err,results,fields)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect("/remark/remark");
        }
})}); 


// ------------------select-------------------------

router.post("/remark_query",(req,res)=>{
    let remark_banana="select * from remark where id=?";
    let remark_data=[req.body.remark_ID];
    db.exe(remark_banana,remark_data,(err,reslut)=>{
        if(err){
            console.log(err);
        }else{
            res.render("remark_query",{remark_detail:reslut});
        }
    })
});

module.exports = router;