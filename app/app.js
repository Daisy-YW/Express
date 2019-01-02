var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');   //引入处理根目录请求的路由
var usersRouter = require('./routes/users');   //引入处理users目录请求的路由
//挂载vip路由模块
var vip = require("./routes/vip");

var app = express();

// view engine setup
//path.join路径拼接, __dirname  当前文件名
//设置模板的默认目录
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');      //设置模板引擎为ejs模板


/* 
  中间件:
    1)什么是中间件?
      中间件是一个函数,位于客户端和路由之间,可以访问请求对象和响应对象,也可以调起下一个中间件
      express框架就是一个由中间件构架起来的框架,整个框架都是中间件

    2)自定义中间件
      自定义一个函数,交给app.use去使用,就是中间件
        app.use(function(req,res,next){    
          res.send("我是中间件");
        });

    3)尾函数 next;
        如果在中间件不调用next尾函数,整个请求响应流程就终止,不会再往后执行
        调用尾函数相当于调用下一个中间件,执行完以后自己的函数继续执行
*/


/* //尾函数练习
app.use(function(req,res,next){
  console.log("111");
  //如果next放在中间,执行的顺序是  111  333  444  222
  //在执行111后跳到了下一个中间件,然后下一个中间件行不通的时候,返回执行222
  next();
  console.log("222");
  // next();   //调用尾函数,放行
});
app.use(function(req,res,next){
  console.log("333");
  next();
  console.log("444");
})
app.use(function(req,res,next){
  console.log("555");
}) */


/* //自定义中间件
app.use(function(req,res,next){    
  //next是尾函数,只有next主动调起下一个中间件,才会执行下一个中间件函数
  //如果不调起下一个中间件,网页将会被挂起,后面的内容将不会被执行
  //next可以在中间拦截
  console.log("我是中间件") 
});
 */



/* 
  需求: 写一个记录网站访问日志的中间件
*/
app.use(function(req,res,next){
  var fs = require("fs");
  var ip = req.ip;
  var time = new Date().toLocaleDateString();

  var data = fs.readFileSync("./2018-01-17.log");
  data +='访问时间: '+time+" IP: "+ip+"\n";
  fs.writeFileSync("./2018-01-17.log",data);
  next();
});



























//所有的app.use都是中间件
app.use(logger('dev'));
console.log(typeof logger('dev'));   //这里所有的app.use调取的都是函数
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
////////////////////////////////////////////////////////////////
// static 静态的,设置静态目录.  当前路径与public拼接
//先显示静态页面,静态页面不存在的时候使用动态文件
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);     //分配根目录下的请求给index去处理
app.use('/users', usersRouter);     //分配users目录下的请求给users模块去处理
//分配任务,所有vip下的目录使用vip.js路由模块
app.use('/vip',vip);

/////////////////////////////////////////////////////////////////
// static 静态的,设置静态目录.  当前路径与public拼接
//如果将静态文件写在动态路由的下面去,将会先查找动态页面,动态页面找不到的情况下,再执行静态文件
// app.use(express.static(path.join(__dirname, 'public')));


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







//手动添加监听端口的代码
app.listen(80,function(){
	console.log('服务器已运行...');
});


module.exports = app;
