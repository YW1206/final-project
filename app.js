var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs'); 
var session = require('express-session');

var itemRouter = require('./routes/item');
var blogRouter = require('./routes/blog');
var LogreRouter = require('./routes/Logre');
var selfRouter = require('./routes/self');
var signupRouter = require('./routes/signup');
var failRouter = require('./routes/404');
var succRouter = require('./routes/true');
var succ1Router = require('./routes/true1');
var adminRouter = require('./routes/admin');
var addRouter = require('./routes/add');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set("view engine","html");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('123'));
app.use(session({
  secret:"123",
  resave:false,
  saveUninitialized:true,
  cookie:{
    maxAge:60000},
  rolling:true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', itemRouter);
app.use('/blog',blogRouter);//后面代表的是路径上面的名字,而且还是路由的名字关联，如果这个/后面什么都不写，就跳转不到那个路由
app.use('/Logre',LogreRouter);
app.use('/self',selfRouter);
app.use('/signup',signupRouter);
app.use('/404',failRouter);
app.use('/true',succRouter);
app.use('/true1',succ1Router);
app.use('/admin',adminRouter);
app.use('/add',addRouter);
 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
