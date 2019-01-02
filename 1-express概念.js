/* 
1. 什么是express?
    express是一个基于nodejs的极简/灵活的web开发框架.
    可以实现非常强大的Web服务器功能.

2. express有什么特点?
    可以设置中间件响应或过滤http请求.
    可以使用路由实现动态网页,响应不同的http请求
    内置支持ejs模板(默认是jade模板),可以实现模板渲染生成html

3.express-generator  生成器
    express=generator是express官方团队为开发者准备的一个快速生成工具,可以非常快速的生成一个基本的express开发框架.

4.express安装与使用
    1. 安装express-generator生成器
        npm/cnpm i -g express-generstor   //安装完成后可以使用express命令
    2. 创建项目
        是express-generator模板
        express -e 项目名称    //自动创建项目目录
        express -e   //手动创建项目目录
    3. 安装依赖
        cnpm i
    4. 开启项目
        1.1 node app      //推荐,但是需要手动添加监听端口的代码
            app.listen(80,function(){
                console.log('Server is runing...');
            })
        1.2 npm start     //自动查找当前目录下的package.json文件,找到start对应的命令进行执行
        1.3 node ./bin/www
    5. 测试项目
        打开浏览器,输入localhost/127.0.0.1
    
*/