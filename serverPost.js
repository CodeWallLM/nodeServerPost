// express
const express=require("express");
const app=express();
// 加载文件
const fs=require("fs");
// 获取传进来的参数
var bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 解决跨域问题
app.use("*", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
});
// post请求
app.post('/getData', function (req, res) {
   	res.writeHead(200, {'Content-Type': 'text/json; charset=utf-8'});
   	fs.readFile('UserInfo.json', function (err, data) {
	  res.end(data);
	});
});
// 设置服务端口与域名
var server = app.listen(8888,'127.0.0.1', function () {
	  var host = server.address().address;
  	var port = server.address().port;
  	console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
