var express = require("express");
var router = express.Router();
var db = require('../models/db');

router.get("/",(req,res)=>{
    res.render("sendblog");
})


// -------------发送博客的功能-------------------
router.get("/showblog",(req,res)=>{
    let apple="select * from blog_content where id = (select MAX(id) from blog_content)"
    db.exe(apple,"",(err,data)=>{
    console.log(data);
    res.render('index',{data:data[0]});
    })
});


router.post('/send', function(req, res, next) { 
    let send_cat="insert into blog_content(campu_title,campu_text,event_title,event_text,club_title,club_text,honor_title,honor_text)  values(?,?,?,?,?,?,?,?)"
    let send_dog=[req.body.campu_title,req.body.campu_text,req.body.event_title,req.body.event_text,req.body.club_title,req.body.club_text,req.body.honor_title,req.body.honor_text];
    db.exe(send_cat,send_dog,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data);
            res.redirect("/send_blog/showblog")
        }
    })
  });


module.exports = router;