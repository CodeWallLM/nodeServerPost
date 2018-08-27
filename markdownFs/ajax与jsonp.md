---
title: ajax与jsonp
tags:
    - 前端
    - 数据
categories:
    - 前端
description:
    - 数据
---
# 一、ajax:
* 作用：在不刷新的前提下刷新数据
### 1.get方式：
~~~
//初始化ajax
var xhr=new XMLHttpRequest();
//获取后台数据
//三个参数：发送方式、后台数据地址、异步同步
xhr.open("get","links/1.get.php?username="+user_val+"&age="+age_val,true);
//发送数据
xhr.send();
//状态  共五步
xhr.onreadystatechange=function () {
    if(xhr.readyState==4&&xhr.status==200){
        //responseText接受字符串等数据，xml接受responsexml
        h.innerText=xhr.responseText;
        h.style.display="block";
    }
}
~~~
### 2.post方式：
~~~
//初始化ajax
var xhr=new XMLHttpRequest();
//获取后台数据
xhr.open("get","links/1.get.php?username",true);
//发送数据
//需要加请求头
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.send("username="+user_val+"&age="+age_val);
//状态  共五步
xhr.onreadystatechange=function () {
    if(xhr.readyState==4&&xhr.status==200){
        //responseText接受字符串等数据，xml接受responsexml
        h.innerText=xhr.responseText;
        h.style.display="block";
    }
}
~~~
### 3.get与post的区别：
* get 请求:
    - 数据都在地址栏中，不安全
    - 数据大小有限制
    - 传输速度快
* post 请求:
    - 数据在内部发送,相对安全
    - 传输速度相对较慢
    - 数据大小理论无限制
### 4.ajax的缺点：
* 不支持后退；
* 安全问题，暴露了数据的交互细节；
* 对搜索引擎的支持比较弱；
* 破坏了程序的异常机制
# 二、JSONP跨域请求
* 动态创建一个带有src的标签
* 让他的src属性等于你要请求的地址
* 把你创建的标签放到文档中
* 如果你需要对返回的数据操作,你得给他传递一个callback函数,callback=fn你要的方法