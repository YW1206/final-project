let express = require('express');
let router = express.Router();
var db = require('../models/db');
 

router.get('/',(req,res,next) => {
    // order by ID desc
    let data="select * from admination where status=1 order by ID desc limit 3";
    db.exe(data,function(err, results, fields){
        res.render('admin',{detail:results});
   });
});


router.get('/add',(req,res) => {
    res.render('add',{obj:{},id:""});
});

router.post('/add',(req,res) => {
    let dog="insert into admination(name,BlogID,Blog,email,phnoe) value(?,?,?,?,?) ";
    let cat=[req.body.name,req.body.BlogID,req.body.Blog,req.body.email,req.body.phnoe];
    db.exe(dog,cat,(err,results,fields)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect("/admin");
        }
})});

router.get('/de/:id',(req,res) => {
    let ID = req.params.id;
    let sql="update admination set status=0  where id=?";
    db.exe(sql,[ID],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
            res.redirect('/admin');
        }
    })
});
router.get('/update/:id',(req,res)=>{     
    let id=d[req.params.id];
    res.render('add',{obj:id,ID:req.params.id});
     
});

router.get("/nextPage",(req,res)=>{
    let lion="select * from admination where status=1 order by ID desc";
    db.exe(lion,"",(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.render('admin',{detail:result});
        }
    })
});

module.exports = router;