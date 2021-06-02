var express = require("express");
var router = express.Router();
var db = require('../models/db');


// ------------- 校园-------------------
router.get("/",(req,res)=>{
    res.render("sendblog_campu");
});

// ------ 发送博客-----
router.get("/showblog",(req,res)=>{
    let apple="select * from campu"
    db.exe(apple,"",(err,data)=>{
    res.render('index',{data:data});
    })
});


router.post('/send', function(req, res, next) { 
    let send_cat="insert into campu(campu_title,campu_text)  values(?,?)"
    let send_dog=[req.body.campu_title,req.body.campu_text];
    db.exe(send_cat,send_dog,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data);
            res.redirect("/send_blog/showblog")
        }
    })
  });


  router.post("/like",(req,res)=>{
      let like="update campu set campu_like=campu_like+1";
      db.exe(like,"",(err,data)=>{
          if(err){
              console.log(err);
          }else{
              console.log(data);
              res.redirect("/send_blog/showblog");
          }
      })
  })



// ------------- 社团-------------------
router.get("/club",(req,res)=>{
    res.render("sendblog_club");
});

// ----- 发送博客 ------
router.get("/showblog_club",(req,res)=>{
    let apple_club="select * from club"
    db.exe(apple_club,"",(err,club)=>{
    res.render('index_club',{club:club});
    })
});

router.post("/club",(req,res)=>{
    let send_club="insert into club(club_title,club_text) values(?,?)"
    let data_club=[req.body.club_title,req.body.club_text];
    db.exe(send_club,data_club,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data);
            res.redirect("/send_blog/showblog_club");
        }
    })
});




 
// -------------校园大事-------------------
router.get("/event",(req,res)=>{
    res.render("sendblog_event");
});

// ----- 发送博客 -----
router.get("/showblog_event",(req,res)=>{
    let apple_event="select * from event"
    db.exe(apple_event,"",(err,event)=>{
    res.render('index_event',{event:event});
    })
});

router.post("/event",(req,res)=>{
    let send_event="insert into event(event_title,event_text) values(?,?)"
    let data_event=[req.body.event_title,req.body.event_text];
    db.exe(send_event,data_event,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data);
            res.redirect("/send_blog/showblog_event");
        }
    })
})




// -------------荣誉-------------------
router.get("/honor",(req,res)=>{
    res.render("sendblog_honor");
});

// -----发送博客-----
router.get("/showblog_honor",(req,res)=>{
    let apple_honor="select * from honor"
    db.exe(apple_honor,"",(err,honor)=>{
    res.render('index_honor',{honor:honor});
    })
});

router.post("/honor",(req,res)=>{
    let send_honor="insert into honor(honor_title,honor_text) values(?,?)"
    let data_honor=[req.body.honor_title,req.body.honor_text];
    db.exe(send_honor,data_honor,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data);
            res.redirect("/send_blog/showblog_honor");
        }
    })
})



module.exports = router;