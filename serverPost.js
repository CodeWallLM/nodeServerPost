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
// 读取文件函数
const readFileList = function (path, filesList) {
    var files = fs.readdirSync(path);
    files.forEach(function (itm, index) {
        var stat = fs.statSync(path + itm);
        if (stat.isDirectory()) {
        //递归读取文件
            readFileList(path + itm + "/", filesList)
        } else {

            var obj = {};//定义一个对象存放文件的路径和名字
            obj.path = path;//路径
            obj.filename = itm//名字
            filesList.push(obj);
        }

    })

};
/*
   获取文件夹下的所有文件
        //获取文件夹下的所有图片
        getFiles.getImageFiles("./markdownFs/");
        //获取文件夹下的所有文件
        getFiles.getFileList("./markdownFs/");
*/
const getFiles = {
    getFileList: function (path) {
        var filesList = [];
        readFileList(path, filesList);
        return filesList;
    },
    //获取文件夹下的所有图片
    getImageFiles: function (path) {
        var imageList = [];

        this.getFileList(path).forEach((item) => {
            var ms = image(fs.readFileSync(item.path + item.filename));

            ms.mimeType && (imageList.push(item.filename))
        });
        return imageList;

    }
};
// 获取用户信息
app.get('/getUserInfo', function (req, res) {
    // console.log(req.query)
    res.writeHead(200, {'Content-Type': 'text/json; charset=utf-8'});
    fs.readFile('UserInfo.json', function (err, retdata) {
      var data = {
        code: 0,
        data: JSON.parse(retdata),
        msg: '请求成功'
      }
      res.end(JSON.stringify(data));
    });
});
// 获取md名称
app.post('/MKFilesList', function (req, res) {
    // console.log(req.body)
    res.writeHead(200, {'Content-Type': 'text/json; charset=utf-8'});
    var data = {
        code: 0,
        data: getFiles.getFileList("./markdownFs/"),
        msg: '请求成功'
      }
    res.end(JSON.stringify(data));
});

// 设置服务端口与域名
var server = app.listen(8888,'127.0.0.1', function () {
	  var host = server.address().address;
  	var port = server.address().port;
  	console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
