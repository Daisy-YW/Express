var express = require('express');
var router = express.Router();

/* 
  响应对象res：
    1）响应对象是什么？
      响应对象是指服务器向客户端发送（响应）数据的对象，包含了所有要响应的内容

    2）响应对象的方法
      res.send();     //[重点]返回任意类型的数据给客户端
        注意:
          a. 如果返回一个数字,会被当成一个状态码,会报错
          b. send方法只能出现一次,重复无效还会报错
      
      res.json();   //返回json数据,自动设置响应头

      res.render("模板名称",{数据});   //[重点]读取模板文件,拼接数据,自动将结果发送到浏览器

      res.redirct('目标');   //实现服务器端跳转

      res.set({"Content-Type":"text/html;charset=utf-8;"});   //[重点]设置响应头

      res.status();   //[重点]设置状态码

*/

router.get("/",function(req,res){
  // res.send("<h1>Hello world</h1>");    //可以返回字符串数据


  var data = {"name":"李白","age":20};
  // res.send(data);    //也可以返回一个JSON数据


  // res.send("1");      //如果一定要返回数字,一定要加"",变为字符串


  //不能同时出现两个send方法,会无效报错
  // res.send("张三");
  // res.send("李四");

  //返回状态码+数据  链式调用

  //send方法只能调用一次
  // res.status(200).send("<h1>李四发生一件大事</h1>");
  // ??????????????????????????????????????????????????????????????
  //为什么没有生效
  // res.status(304).send("<h1>已找到李四踪迹</h1>");
  //404报错
  // res.status(404).send("<h1>你说访问的页面不见了</h1>");


  //返回JSON,自动设置响应头
  //res.json()与res.send(data)的区别在于,JSON自动设置响应头
  // res.json(data);

  //render视图模块渲染
  // res.render('index.ejs',{title:"标题名称--张三"});

  /* var list = [
    {
      name:"李白",
      age:999,
      trait:"斩杀"
    },
    {
      name:"李黑",
      age:1000,
      trait:"闪现"
    },
    {
      name:"李太白",
      age:1100,
      trait:"沉默"
    }
  ]
  res.render('list.ejs',{users:list}); */

  //实现服务器端跳转
  // res.redirect('http://www.baidu.com');

})




//将节点暴露出去
module.exports = router;
