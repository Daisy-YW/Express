//引入express模块
//创建一个router实例
var express = require("express");
var router = express.Router();

//编写一个list.html用于展示所有的vip用户
router.get("/list.html",function(req,res){
    res.send("<h1>张三/李四/王小五</h1>");
});

//注意，写请求路由时不需要加父目录名，不要加、vip，不需要写路由中vip后面的一截
router.get("/info.html",function(req,res){
    res.send("<h1>会员名:张三<br>年龄:18<br>特征: 经常失踪</h1>");
});


//暴露
module.exports = router;
