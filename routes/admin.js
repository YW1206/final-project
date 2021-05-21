let express = require('express');
let router = express.Router();
let fs = require('fs');
let d = new Array();
let path= require('path');
var mysql=require('mysql');
fs.readFile(path.join(__dirname,"/bean","/user.json"),{encoding:"UTF-8"},(err,data)=>{
        d = JSON.parse(data);
});
// var connect=mysql.createConnection({
    // host:"localhost",
    // user:"root",
    // password:"123456",
    // database:"ta"
// })

router.get('/',(req,res,next) => {
        res.render('admin',{detail:d} );
});
    



router.get('/addpage',(req,res) => {
    res.render('add',{obj:{},id:""});
});


router.post('/add',(req,res) => {
    let obj = {
        // id:req.body.id,
        name:req.body.user,
        s1:req.body.s1,
        s2:req.body.s2,
        s3:req.body.s3,
        total:parseInt(req.body.s1)+parseInt(req.body.s2)+parseInt(req.body.s3)
    };
    if(req.body.id !=undefined && req.body.id !=""){
        d[req.body.id] = obj;
        res.redirect('/');
    }else{
        d.unshift(obj);
        res.redirect('/');
    };
});

router.get('/de/:id',(req,res) => {
     delete d[req.params.id];
     res.redirect('/');
});
router.get('/update/:id',(req,res)=>{
    res.render('add',{obj: d[req.params.id],id:req.params.id}) ;  
});
router.post("/nextPage",(req,res)=>{
    res.json(d);
    //当点击下一页时，我们想要的是局部刷新数据就可以了，
//而不是去刷新整个页面，所以这里要的是返回一个数据
})

module.exports = router;