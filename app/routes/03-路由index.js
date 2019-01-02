var express = require('express');
var router = express.Router();

/* GET home page. */
//挂载路由节点
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//编写一个新闻列表的路由,用于接收news请求,next可以不加
router.get("/news.html",function(req,res,next){
  //send方法自由有write方法
  res.send("<h1>这里是新闻列表页面</h1>");
})



//将节点暴露出去
module.exports = router;
