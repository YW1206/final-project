var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('Logre');
  });

router.post('/',(req,res) => {//这里的路径对应的是？
    let name=req.body.name;
    let password=req.body.password;
    if( req.session.user != undefined 
     && name == req.session.user.name
     && password == req.session.user.password
    ){  
        res.redirect('/true');
    }else if(name =="admin" && password=="admin"
    ){
        res.redirect("/admin")
    }else{
        res.redirect('/404');
    }
});

module.exports = router;