---
title: html、css
tags:
    - html
    - css
categories:
    - 前端
description:
    - 页面布局
---
# 一、盒子属性：
### 1.margin：盒子与盒子的边距
* 上：margin-top: 100px;
* 下：margin-bottom: 100px:
* 左：margin-left:100px;
* 右：margin-right:100px;
### 2.border：盒子的边框
* 上：border-top: 100px;
* 下：border-bottom: 100px:
* 左：border-left:100px;
* 右：border-right:100px;
### 3.padding：盒子内边距
* 上：padding-top: 100px;
* 下：padding-bottom: 100px:
* 左：padding-left:100px;
* 右：padding-right:100px;
### 4.加个z轴
* z-index: 9999;
### 5.盒子内容大小
* border+padding
# 二、选择器：
#### title链接：
~~~
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
~~~
* 写在<head\></head\>或者css里。
* 写在<head\></head\>里 - 需用<style\></style\>包裹
* 写在css里 - 需要用link链接
* !impront 给标签加权重，变为权重最高的标签
### 1.标签选择器：
~~~
div{
    /*属性值:*/
    width: 100px; //宽100px
    height: 100px; //高100px
}
~~~
### 2.类名选择器：
* .类名（点+类名）{属性值：}
### 3.Id选择器：
* #id名（#+id名）{属性值：}
### 4.并集：
* div，p{属性值}
### 5.后代选择器：
* div p（选择器div下的p全选）{属性值}
### 6.子代选择器：
* div>p（只会寻找div下p，不会全选）{属性值}
### 7.标签指示类选择器：
* div.p（指定是标签选择）{属性值}
### 8.通配符选择器：
* *（通配符选择器，匹配所有标签）{属性值}
# 三、字体：
### 1.字体大小：
* font-size: 12px;
### 2.字体加粗：
* font-weight: 700; //默认：400,一般加粗：700,范围：100-900
### 3.斜体字：
* font-style: italic;
### 4.设置字体：
* font-family: "楷体";
### 5.字体间间距：
* letter-spacing:1px;
### 6.font缩写
* font: italic 700  30px/40px 楷体; //必须有字体大小和字体类型
* 字体: 斜体 加粗 大小/行高 类型
### 7.水平居中：
* text-align: center;
### 8.垂直居中：
* line-height: 100px; //Xpx是等于行高
### 9.首行缩进：
* text-indent: 2em; //2em是两个汉字的大小/10px像素;
### 10.颜色类：
#### 字体颜色：
* color: red;
* color: rgb(34,34,34);
* color: rgba(34,34,34,0.3); //a是代表透明度，a取值范围[0-1]
* opacity:0.5; //透明度
#### 颜色渐变：
* background:-webkit-gradient(linear,0 0, 0 100%,from(red),to(white));
# 四、边框类
### 1.加边框：
* border: 1px solid red;（边框为红色一周）
* border:none; //默认无边框
* border:solid; //实线
* border:dotted; //点线
* border:dashed; //虚线
### 2.去边框：
* border: 0 none;
### 3.边框圆角：
* border-radios: 50%; //或者5px;
### 4.去轮廓线：（输入框）
* outline-style: none;
### 5.去除a链接的下滑线：
* text-decoration: none;
### 6.插入背景图
* background-image: url(图片);
* background-repeat: no-repeat;
* background-position: right; //放在右侧
* background:color url(图片) no-repeat scroll left top
# 五、Input的一些用法
~~~
用户名：<input type=”text” placeholder=”请输入用户名”/><br/>
密码：<input type=”password” placeholder=”请输入密码”/><br/>
性别：男：<input type=”radio” name=”a”/> //单选框
     女：<input type=”radio” name=”a”/>
<input type=”submit” balue=”注册”/>
<input type=”reset” disabled=true/> //重置disabled=false;是这个按钮作废
<input type=”button” value=”登录/取消”/>
<input type=”checkbox”/> //多选框
<textarea placeholder=”请输入标签标识”><textarea> //文本域
resize:none; //文本域不可拉伸
<select></select> //建立一个可下拉式标签
~~~
### submit与button的区别:
* submit:提交表单
* button:只有按钮功能，用以绑定事件
# 六、行块转换
#### 行内元素与块级元素的区别：
* 行内元素：a、span、b、br、font、var
    - 特点：不占用一行，并且不可设置高度、宽度、行高及顶底边距
* 块级元素：div、p、h1、ul、li
    - 特点：占用一行，并且可设置高度、宽度、行高及顶底边距，如果自身没有设置就占用父元素的100%;
### 1.转行内元素：
* display: inline;
### 2.转行内快：
* display: inline-block;
### 3.行转块：
* display: block;
#### overflow属性：
* overflow: auto;（自动检查）
* overflow: visible;（超出部分显示）
* overflow: hidden;（超出部分隐藏，不占位置）
* display:none;（隐藏，不占位置）
* visibility:hidden;（隐藏，占位置）
* overflow: scroll;（超出部分滚动）
* title:鼠标悬停时显示
* alt:图片不能加载时显示的
#### 伪类:设置鼠标停留:hover
* div: hover{属性值};//设置块鼠标停留的阴影面积与点击
#### 块的显示与隐藏：
~~~
//隐藏：
p{
    display:none;
}
//显示：
div:hover p{
    display:block;
}
~~~
#### 永远在前/后：
~~~
div:before{
    //before:之前;after:之后;
    content:”你好”;
}
~~~
# 七、旋转
### 1.旋转角度：
~~~
@keyframes a{
    from{
        transform:rotate(0deg);
    }
    to{
        transform:rotate(360deg);
    }
}
~~~
### 2.匀速旋转：
* animation: a 15s linear infinite; //linear：匀速;infinite:无限的
### 3.顶部旋转：
* transform-origin: top center;
# 八、序列
### 1.无序：
~~~
<ul>
    <li></li>
</ul>
~~~
* list-style: none; //去掉无序前的点
* ul：设置位置
* li：设置样式/形式
### 2.有序：
~~~
<ol>
    <li></li>
</ol>
~~~
### 3.标题：
~~~
<dl>
    <dt>分类<dt>
    <dd>类别<dd>
    <dd>类别<dd>
<dl>
~~~
# 九、浮动
#### 浮动会脱离标准流，转成行内快
### 1.左浮动：
* float: left;
### 2.右浮动：
* float: right;
### 3.清除浮动：
* clear:left|right|both;
#### 清除浮动（推荐写法）：
~~~
.clearfix:after{
    content:"";
    height: 0;
    line-height: 0;
    visibility: hidden;
    clear:both;
    display:block;
}
.clear{
    zoom:1;
}
~~~
### 4.浮动的盒子居中:
~~~
div{
    width: 300px;
    height: 300px;
    text-align: center;
    line-height: 300px;
    float:left;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    marign:auto;
}
~~~
# 十、定位
#### 脱离标准流会转成行内快
### 1.相对定位：相对于自己本身位置定位的
* position: relative;
### 2.绝对定位：父类没有定位，以浏览器左上角为准；父类定位，以父类左上角为准
* position: absolute;
### 3.固定定位：以浏览器左上角为准，不占位
* position:fixed;