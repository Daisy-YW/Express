var express = require('express');
var router = express.Router();

router.get('/index.html',function(req,res){
  res.send("我是动态页面")
})
/* 
请求对象req:  
  1)什么是请求对象
      客户端向服务器端发送数据的对象,包含了请求头和请求主体
  
  2)接收GET方式传的值
    req.query.参数名;
        实例:http://www.baidu.com?name=007
              req.query.name;
  
  3)接收POSt方式的值
    req.body.参数名
      实例:
        req.body.username
  
  4)匹配URL网址上的数据(匹配模式)
    在接请求的地方匹配,再通过语法接收
    语法:  req.params.参数名
*/

//需求: 制作HTML页面,实现GET和POST方式传参数,在服务器端接收

router.get('/content.html',function(req,res){
  //获取用户地址
  console.log(req.ip);
  //req.query.参数名
  var id = req.query.id;
  res.send("获取到的id是:"+id);

})

//编写login.html路由,接收POST传的值,处理数据
//如果浏览器直接运行localhost/login.html,会显示404,因为浏览器向服务器端发送的方式全都是get方式,这里是post方式
router.post('/login.html',function(req,res){
  var username = req.body.username;
  var pwd = req.body.pwd;
  res.send("您的用户名为"+username+"<br>"+"您的密码为"+pwd);
})


//编写一个news路由,接收新闻请求
//如果需要匹配的话,需要再路由路径后面设置匹配参数名---匹配模式(伪静态)
//浏览器地址必要是news/id,如果是news.html/id就算做错误
router.get('/news/:id',function(req,res){
  var id = req.params.id
  res.send("<h1>接收到的参数是:"+id+"</h1>");
  
})

//将节点暴露出去
module.exports = router;
