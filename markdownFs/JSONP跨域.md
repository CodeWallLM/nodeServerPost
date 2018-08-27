---
title: JSONP跨域
tags:
    - demo
categories:
    - 前端
description:
    - 12306火车票查询
---
# 一、html
~~~
<!--查询-->
<div class="LselectWrap w">
    <!--左边-->
    <div class="LselectLeft">
        <p><input type="radio" name="a" checked=true>单程</p>
        <p><input type="radio" name="a">往返</p>
    </div>
    <!--查询区间-->
    <div class="LselectCenter">
        <label for="Lout">
            <span>出发地</span><input id="Lout" type="text" placeholder="简拼/全拼/汉字">
        </label>
        <i class="fa fa-refresh"></i>
        <label for="Lgoto">
            <span>目的地</span><input id="Lgoto" type="text" placeholder="简拼/全拼/汉字">
        </label>
        <p><span>出发日</span><span class="Ldate">2017-10-06<i class="fa fa-file-text-o fa-2x"></i></span></p>
        <p><span>返程日</span><span class="Ldate">2017-10-06<i class="fa fa-file-text-o fa-2x"></i></span></p>
    </div>
    <div class="LselectRight">
        <div class="LselectLeft">
            <p><input type="radio" name="b" checked=true>普通</p>
            <p><input type="radio" name="b">学生</p>
        </div>
        <button class="Lbtn">查询</button>
    </div>
</div>
<!--列车-->
<ul class="w LnavWrap">
    <li>车次</li>
    <li>发车站</li>
    <li>到达站</li>
    <li>发车时间</li>
    <li>到达时间</li>
    <li>运行时长</li>
    <li>
        <div>
            <p>座位类型</p>
            <p>座位价格</p>
        </div>
    </li>
</ul>
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
~~~
# 二、css
~~~
*{
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
}
li{
    list-style: none;
}
.w{
    width:980px;
    margin: 0 auto;
}
input{
    outline-style: none;
}
.clearfix:after{
  content: "";
  height: 0;
  line-height: 0;
  clear: both;
  visibility: hidden;
  display: block;
}
.clear{
    zoom:1;
}
/*查询*/
.LselectWrap{
    height: 60px;
    border: 1px solid #298CCE;
    background-color: #EEF1F8;
    border-radius: 5px;
    padding: 6px 0px;
}
/*左边*/
.LselectLeft{
    float: left;
    font-size: 12px;
}
.LselectLeft>p{
    width:45px;
    height: 30px;
    line-height: 30px;
    margin-left: 12px;
    padding-right: 12px;
    margin-right: 12px;
    border-right: 1px solid #298CCE;
}
/*查询区间*/
.LselectCenter{
    float: left;
    line-height: 60px;
    font-size: 12px;
}
.LselectCenter input{
    width:118px;
    height: 28px;
    line-height: 28px;
    text-indent: 3px;
}
.LselectCenter>p{
    display: inline-block;
}
.Ldate{
    width:118px;
    height: 30px;
    display:inline-block;
    border: 1px solid #CFCDC7;
    background-color: #fff;
    line-height:30px;
}
.Ldate>i{
    float: right;
    margin-top: 2px;
    color: #CFCDC7;
    margin-right: 2px;
}
.LselectRight{
    height: 60px;
    display: inline-block;
    margin-left: 12px;
    border-left: 1px solid #298CCE;
    padding-left: 12px;
}
.LselectRight button{
    width:88px;
    height: 30px;
    outline-style: none;
    border: none;
    background-color: red;
    color: white;
    margin-top: 14px;
}
.LselectRight>.LselectLeft>p{
    border: none;
}
/*列车*/
.LnavWrap{
    margin-top: 20px;
    height: 30px;
    background-color: dodgerblue;
    color: whitesmoke;
    padding: 10px 0px;
    font-size: 12px;
}
.LnavWrap li{
    float: left;
    width:77px;
    height:100%;
    text-align: center;
    line-height: 30px;
    border-right: 1px solid blue;
}
.LnavWrap li div{
    width:100%;
    height: 100%;
}
.LnavWrap li div p{
    width:100%;
    height: 50%;
    line-height: 15px;
}
.LnavWrap>li:last-child{
    border-right:0px;
}
/*列车*/
.Llist{
    margin-top: 0px;
    background-color: #fff;
}
.Llist ul{

}
.Llist ul li{
    border-right: 1px solid #c0c0c0;
    color: black;
    margin: 10px 0px;
    background-color: #eaeaea;
}
.Llist ul li:last-child{
    border:none;
}
~~~
# 三、js
~~~
//当点击查询按钮时，获取两个输入框的value值；并动态创建一个带有src属性的标签script；
// 让他的src属性等于你要请求的地址；
// 把你创建的标签放到文档中；
//如果需要对返回的数据操作,传递一个callback参数,callback=方法；
var $Lbtn=$(".Lbtn");
$Lbtn.click(function () {
    var Lout=document.getElementById("Lout");
    var Lgoto=document.getElementById("Lgoto");
    var Louttext=Lout.value;
    var Lgototext=Lgoto.value;
    console.log(Louttext);
    console.log(Lgototext);
    if(Louttext==""&&Lgototext==""){
        alert("请输入车次");
        return;
    }
    var path=document.createElement("script");
    path.src="http://apis.juhe.cn/train/s2swithprice?start="+Louttext+"&end="+Lgototext+"&key=bf81227b829a75b0329a6037331c0467&callback=fn";
    document.head.appendChild(path);
    document.head.removeChild(path);
    // fn(data);
});
// 回调函数
var $Llist=$(".Llist");
function fn(data) {
    $Llist.html("");
    console.log(data);
    var $list=data.result.list;
    console.log($list.length);
    var $data=data.result;
    for(var i=0;i<$list.length;i++){
        var $li=$list[i];
        var ul=document.createElement("ul");
        ul.innerHTML+='<li>'+$li.train_no+'</车次li>\n'+
            '<li>'+$li.start_station+'</li>\n'+
            '<li>'+$li.end_station+'</li>\n'+
            '<li>'+$li.start_time+'</li>\n'+
            '<li>'+$li.end_time+'</li>\n'+
            '<li>'+$li.run_time+'</li>\n';
        for(var j=0;j<$li.price_list.length;j++){
            ul.innerHTML+= '<li>\n' +
                '<div>\n' +
                '<p>'+$li.price_list[j].price_type+'</p>\n' +
                '<p>¥:'+$li.price_list[j].price+'</p>\n' +
                '</div>\n' +
                '</li>'
        }
        $Llist.append(ul);
        var $ul=$(".Llist>ul");
        $ul.addClass("clearfix");
    }
}
~~~