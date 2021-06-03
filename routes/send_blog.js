var express = require("express");
var router = express.Router();
var db = require('../models/db');


// ------------- 校园-------------------
router.get("/bylike",(req,res)=>{
    let bylikesql="select * from campu ORDER BY campu_like DESC"
    db.exe(bylikesql,"",(err,row)=>{
        res.render("index",{data:row})
    })
})

router.get("/bytime",(req,res)=>{
    let bylikesql="select * from campu  ORDER BY id desc"
    db.exe(bylikesql,"",(err,time)=>{
        res.render("index",{data:time})
    })
})


router.get("/",(req,res)=>{
    res.render("sendblog_campu");
});

// ------ 发送博客-----
router.get("/showblog",(req,res)=>{
    let apple="select * from campu "
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
            res.redirect("/send_blog/showblog")
        }
    })
  });

// ------ 点赞-----
  router.get("/like/:id",(req,res)=>{
      let like="update campu set campu_like=campu_like+1  where id=?";
      let campu_like=[req.params.id];
      console.log(campu_like);
      db.exe(like,campu_like,(err,data)=>{
          if(err){
              console.log(err);
          }else{
              res.redirect("/send_blog/showblog");
          }
      })
  })



// ------------- 社团-------------------
router.get("/club",(req,res)=>{//跳转到发博客的网站
    res.render("sendblog_club");
});

// ----- 发送博客 ------
router.get("/showblog_club",(req,res)=>{
    let apple_club="select * from club ORDER BY club_like DESC"
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
            res.redirect("/send_blog/showblog_club");
        }
    })
});
// ----- like ------
router.get("/clublike/:id",(req,res)=>{
    let like="update club set club_like=club_like+1 where id=?";
    let club_like=[req.params.id];
    db.exe(like,club_like,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect("/send_blog/showblog_club");
        }
    })
})


 
// -------------校园大事-------------------
router.get("/event",(req,res)=>{
    res.render("sendblog_event");
});

// ----- 发送博客 -----
router.get("/showblog_event",(req,res)=>{
    let apple_event="select * from event ORDER BY event_like DESC"
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
            res.redirect("/send_blog/showblog_event");
        }
    })
})
// ----- like ------
router.get("/eventlike/:id",(req,res)=>{
    let like="update event set event_like=event_like+1 where id=?";
    let event_id=[req.params.id];
    db.exe(like,event_id,(err,data)=>{
        if(err){
            console.log(err);
        }else{
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
    let apple_honor="select * from honor ORDER BY honor_like DESC"
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
            
            res.redirect("/send_blog/showblog_honor");
        }
    })
})
// ----- like ------
router.get("/honorlike/:id",(req,res)=>{
    let like="update honor set honor_like=honor_like+1 where id=?";
    let honor_id=[req.params.id];
    db.exe(like,honor_id,(err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect("/send_blog/showblog_honor");
        }
    })
})


module.exports = router;