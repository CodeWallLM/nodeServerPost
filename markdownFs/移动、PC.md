---
title: 移动端/PC端
tags:
    - demo
categories:
    - 前端
description:
    - 用户的浏览方式
---
# js代码
~~~
function IsPC(){
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
        }
        return flag;
    }
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        //alert(navigator.userAgent);
        window.location.href ="iPhone.html";
    } else if (/(Android)/i.test(navigator.userAgent)) {
        //alert(navigator.userAgent);
        window.location.href ="Android.html";
    } else {
        window.location.href ="pc.html";
    };
~~~