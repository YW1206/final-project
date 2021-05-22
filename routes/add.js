var express = require('express');
var router = express.Router();
 

router.get('/', function(req, res, next) {
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
    // if(req.body.ID !=undefined && req.body.ID !=""){
        // d[req.body.ID] = obj;
        // res.redirect('/');
    // }else{
        d.unshift(obj);
        res.redirect('/');
});

module.exports = router;