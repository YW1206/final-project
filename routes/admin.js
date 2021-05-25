let express = require('express');
let router = express.Router();
var db = require('../models/db');
 

router.get('/',(req,res,next) => {
    let data="select * from admination where status=1 order by ID desc";
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

// router.get('/update/:id',(req,res)=>{
    // res.render('add',{obj: d[req.params.id],id:req.params.id}) ;  
// });

router.post("/nextPage",(req,res)=>{
    res.json(d);
    //当点击下一页时，我们想要的是局部刷新数据就可以了，
//而不是去刷新整个页面，所以这里要的是返回一个数据
})

module.exports = router;