let express = require('express');
let router = express.Router();
var db = require('../models/db');
 

router.get('/',(req,res,next) => {

    db.query("select * from admination",function(err, results, fields){
        console.log(err);
        console.log(results);
        console.log(fields);
        res.render('admin',{detail:results});
   });
});


router.get('/add',(req,res) => {
    res.render('add',{obj:{},id:""});
});


router.post('/add',(req,res) => {
    let obj = {
        ID:req.body.ID,
        name:req.body.name,
        BlogID:req.body.BlogID,
        Blog:req.body.Blog,
        email:req.body.email,
        phnoe:req.body.phnoe
    };
    if(req.body.ID !=undefined && req.body.ID !=""){
        d[req.body.ID] = obj;
        res.redirect('/admin');
    }else{
        d.unshift(obj);
        res.redirect('/admin');
    };
});
// 
router.get('/de/:id',(req,res) => {
     delete d[req.params.id];
     res.redirect('/admin');
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