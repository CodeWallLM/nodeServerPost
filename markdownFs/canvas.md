---
title: canvas
tags:
    - demo
categories:
    - 前端
description:
    - 画笑脸
---
# 一、html
~~~
<!--canvas标签，默认宽高是300与150-->
<canvas id="myCanvas">your browser does not support the canvas tag </canvas>
~~~
# 二、js
~~~
//获取canvas   布         画什么图形   笔
var canvas=document.getElementById('myCanvas');
var ctx=canvas.getContext('2d');
var i=0.1;
var interval=setInterval(function () {
    //确定画的什么
    i+=0.01;
    //确定画的周长
    var j=i;
    //重新获取路径
    ctx.beginPath();
    //黄色的圆脸
    if(i<=2){
    //画的圆   xy圆心  半径  起始点   圆的周长
        ctx.arc(100,100,50,0,j*Math.PI);
        //画线
        ctx.stroke();
        if(j>1.99){
            ctx.clearRect(25,25,200,200);
            ctx.arc(100,100,50,0,j*Math.PI);
            //填充的颜色
            ctx.fillStyle='yellow';
            //填充
            ctx.fill();
        }
    }else if(i>2&&i<=3){
        j-=2;
        //嘴
        ctx.arc(100,100,35,0,j*Math.PI);
        ctx.stroke();
    }else if(i>3&&i<=5){
        j-=3;
        //左眼
        ctx.arc(80,80,5,0,j*Math.PI);
        ctx.stroke();
        if(j>1.99){
            ctx.fillStyle='black';
            ctx.fill();
        }
    }else if(i>5&&i<=7){
        j-=5;
        //右眼
        ctx.arc(120,80,5,0,j*Math.PI);
        ctx.stroke();
        if(j>1.99){
            ctx.fill();
        }
    }else{
        //清除定时器
        clearInterval(interval)
    }
},15);
~~~