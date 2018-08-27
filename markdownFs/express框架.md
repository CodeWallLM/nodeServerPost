---
title: express框架
tags:
    - 框架
categories:
    - 后端
description:
    - node
---
# 一、index.html界面
~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Title</title>
</head>
<body>
<div>
    <form action="/login" method="get">
        <!--action:请求的界面;method:请求的方式;-->
        <label for="user">
            用户名：<input type="text" placeholder="请输入用户名" name="user" id="user">
        </label><br>
        <label for="psd">
            密&nbsp;&nbsp;&nbsp;码：<input type="password" placeholder="请输入用户名" name="psd" id="psd">
        </label><br>
        <input type="submit" value="登录">
    </form>
</div>
</body>
</html>
~~~
# 二、login.html界面
~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Title</title>
</head>
<body>
<div>
    aaaaaaaa
</div>
</body>
</html>
~~~
# 三、app.js界面(get请求)
~~~
const express=require("express");
const fs=require("fs");
const app=express();
app.get("/",function (req,res) {
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    fs.readFile("./index.html",function (err,data) {
        res.end(data);
    })
});
app.get("/login",function (req,res) {
    //req:传入的的数据;res:传出的数据
    console.log(req);
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    fs.readFile("./login.html",function (err,data) {
        res.end(req.query.user);
    })
})
var server=app.listen(8888,function () {
    //8888:端口
    var host = server.address().address;
    var port = server.address().port;
    console.log("服务启动了");
});
~~~
# 四、app.js界面(post请求)
~~~
const express=require("express");
const fs=require("fs");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const app=express();
app.get("/",function (req,res) {
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    fs.readFile("./index.html",function (err,data) {
        res.end(data);
    })
});
app.post("/login",urlencodedParser,function (req,res) {
    console.log(req.body);
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    fs.readFile("./login.html",function (err,data) {
        res.end(req.body.user);
    })
})
var server=app.listen(8888,function () {
    //8888:端口
    var host = server.address().address;
    var port = server.address().port;
    console.log("服务启动了");
});
~~~