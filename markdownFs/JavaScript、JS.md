---
title: JavaScript
tags:
    - JS
categories:
    - 前端
description:
    - 页面动画
---
# 一、JavaScript组成
### 1.ECMAScript 一套标准
* E（element）：元素 C（class）：类名 M（comment）：注释 A（attribute）：属性
### 2.BOM 浏览器对象
### 3.DOM 文档对象
# 二、用法
### 1.内嵌：
```html
 <script type="application/javascript"></script>
```
### 2.外链：
    `<script scr="路径" language="javascript"></script>//不可书写内容`
### 3.行内：
    `<script name="btn" type="button" value="按钮" onclick="javascript:alret("欢迎你")";/>`
# 三、变量
#### var用来定义变量
* var a=5; //全局变量
* a=6; //全局变量,可更改
#### constant用来定义常量，不变的量
* const c=5;
* c=6; //不可重新定义常量
#### 数据类型的使用
~~~
//算式：
var a=5;
function f(){
    console.log(a);//undefined
    var a=6;
    console.log(a);//6
}
f();
console.log(a);//5
//页面是先加载后运算：
var a;
console.log(a);
a=6;
console.log(a);
~~~
# 四、数据类型
#### 基础类型与混合数据类型
* 1.基础数据类型
    - a.数字类型（number）：
        ~~~
        //数字类型：
        var num=5;
        var nums=5.0;
        console.log(num);//5
        console.log(nums);//5
        console.log(typeof num);//number
        console.log(typeof (typeof num));//string
        //非数字类型（NaN）：
        nu=num/"a";
        console.log(nu);//NaN
        console.log(typeof nu);//number
        console.log(typeof (typeof nu));//string
        ~~~
    - b.字符串类型（string）：
        ~~~
        var str="sss";
        console.log(str);//sss
        console.log(typeof str);//string
        console.log(typeof (typeof str));//string
        ~~~
    - c.布尔类型（boolean）：
        ~~~
        var boo=true;
        console.log(boo);//true
        console.log(typeof boo);//boolean
        console.log(typeof (typeof boo));//string
        ~~~
    - d.Null类型：
        ~~~
        var nul=null;
        console.log(nul);//null
        console.log(typeof nul);//object
        console.log(typeof (typeof nul));//string
        ~~~
    - e.Undefined类型：
        ~~~
        var un;
        console.log(un);//undefined
        console.log(typeof un);//undefined
        console.log(typeof (typeof un));//string
        ~~~
* 2.混合数据类型：
    - f.object类型：
        ~~~
        var obj={
            "name":"三国演义",
            "age":18,
        };
        console.log(obj);//{name：三国演义，age：18}
        console.log(typeof obj);//object
        console.log(typeof (typeof obj));//string
        ~~~
# 五、运算符
### 1.选择
* if语句
    ~~~
    if（条件）{
        //条件为true是执行
    }else if{
        //条件为true是执行
    }else{
        //上面条件都为false时执行
    }
    ~~~
* switch语句
    ~~~
    witch（number）{
        case 1:
            number=1时执行;
            break;
        case 2:
            number=2时执行;
            break;
        default:
            //number不等于上面值时执行
    }
    ~~~
### 2.循环
* for循环
    ~~~
    for(var i=0;i<number;i++){
        //执行代码;
    }
    ~~~
* while循环
    ~~~
    while(条件){
        //执行代码;（含有终止条件代码）
    }
    ~~~
* do……while循环
    ~~~
    do{
       // 执行代码;（含有终止条件代码）
    }while(条件);
    ~~~
* continue:跳过本次循环
# 六、标准类对象
* 1.字符串：
    - charAt() 返回指定位置的字符
    - charCodeAt() 返回指定位置的字符的Unicode编码
    - search() 用于检索字符串中指定的子字符串
    - replace() 查找匹配指定的字符串，然后用新字符串代替匹配的字符串
    - concat() 将两个或多个字符的文本组合起来，返回一个新的字符串
    - 使用加号链接字符串。 newStr = “string1”+”string2”
    - indexOf() 返回字符串中一个子串第一处出现的索引。如果没有匹配项，返回 -1
    - lastIndexOf() 返回字符串中一个子串最后一处出现的索引，如果没有匹配项，返回-1
    - slice() 提取字符串的一部分，并返回一个新字符串。两个参数，第一个为起始位置，第二个为终止位置（留头不留尾），如果没有end，就取到末尾
    - substring() 返回字符串的一个子串。传入参数是起始位置和结束位置。（留头不留尾），如果没有end，就取到末尾
    - split() 通过将字符串划分成子串，将一个字符串做成一个字符串数组。
    ~~~
        var txt="Hello World!";
        document.write("<p>Big: " + txt.big() + "</p>");
        document.write("<p>Small: " + txt.small() + "</p>");
        document.write("<p>Bold: " + txt.bold() + "</p>");
           //Bold: Hello World! - 字体加粗
        document.write("<p>Italic: " + txt.italics() + "</p>");
        document.write("<p>Blink: " + txt.blink() + " (does not work in IE)</p>");
           //blink() 方法用于显示闪动的字符串/Blink: Hello World! (does not work in IE)
        document.write("<p>Fixed: " + txt.fixed() + "</p>");
           //fixed() 方法用于把字符串显示为打字机字体/Fixed: Hello World!
        document.write("<p>Strike: " + txt.strike() + "</p>");
           //strike() 方法用于显示加删除线的字符串
        document.write("<p>Fontcolor: " + txt.fontcolor("Red") + "</p>");
        document.write("<p>Fontsize: " + txt.fontsize(16) + "</p>");
        document.write("<p>Lowercase: " + txt.toLowerCase() + "</p>");
           //Lowercase: hello world!
        document.write("<p>Uppercase: " + txt.toUpperCase() + "</p>");
           //Uppercase: HELLO WORLD!
        document.write("<p>Subscript: " + txt.sub() + "</p>");
           //右下角变小
        document.write("<p>Superscript: " + txt.sup() + "</p>");
           //右上角变小
        document.write("<p>Link: " + txt.link("http://www.w3school.com.cn") + "</p>");
    ~~~
* 2.数组：
    ~~~
        var arr1=new Array(0,1,"2",3,4);
        var arr2=new Array(5,6,"7",8,9);
        console.log(arr1.join());
        //"0","1","2","3","4","5"
        //将数组转成字符串（数组转成字符并拼接）
        //不改变元素组
        console.log(arr1);
        //0,1,"2",3,4
        console.log(arr1.join("、"));
        //0、1、2、3、4
        console.log(arr1.pop());
        //4
        //返回组中最后一个元素并删除组中值
        //改变数组
        console.log(arr1);
        //0,1,"2",3
        console.log(arr1.push("44"));
        //5
        //添加一个元素并返回数组长度
        //改变数组
        console.log(arr1);
        //0,1,"2",3,"44"
        console.log(arr1.shift());
        //0
        //删除并返回数组的第一个元素
        //改变数组
        console.log(arr1);
        //1,"2",3,"44"
        console.log(arr1.unshift("aa","bb"));
        //6
        //开头添加元素并返回数组的长度
        //改变数组
        console.log(arr1);
        //"aa","bb",1,"2",3,"44"
        console.log(arr1.reverse());
        //"44",3,"2",1,"bb","aa"
        //颠倒数组的顺序
        //改变数组
        console.log(arr1);
        //"44",3,"2",1,"bb","aa"
        var arr=[44,3,55,1,5,62,6,3542,]
        console.log(arr.sort());
        //1,3,3542,44,5,55,6,62
        //对数组进行排序,按第一个字符排序
        console.log(arr);
        //1,3,3542,44,5,55,6,62
        console.log(arr1.sort());
        //1,"2",3,"44","aa","bb"
        console.log(arr1.concat(arr2));
        //1,"2",3,"44","aa","bb",5,6,"7",8,9
        //数组的拼接，不改变原数组
        console.log(arr1);
        console.log(arr1.slice(1));
        console.log(arr1);
        //1,"2",3, "44","aa","bb"
        //"2",3,"44","aa","bb"
        //1,"2",3, "44","aa","bb"
        //剪切数组，不改变原数组
        console.log(arr1.slice(1,3));
        //"2",3---[1,3)
        console.log(arr1.splice(2,3,111));
        //3,"44","aa"
        //第一个是索引位置，第二个是个数，第三个是添加元素
        console.log(arr1);
        //1,"2",111,"bb"
        console.log(arr1.splice(2));
        //111,"bb"
    ~~~
# 七、数学对象math：
#### e:2.71828;
#### ln2: 0.69314718055994528623;
#### ln10:2.3025850929940459011;
#### pi:3.141592653589793;
* 1.Math属性和方法
    - Math.abs(x)	返回数的绝对值
    - Math.ceil(x)	装天花板、对数进行上取整
    - Math.floor(x)	 地面、对数进行下取整
    - Math.max(x,y)	  至多、返回 x 和 y 中的最高值
    - Math.min(x,y)  微小的、返回 x 和 y 中的最低值
    - Math.round(x)  大约，环绕、把数四舍五入为最接近的整数
    - Math.pow(x,y)  脑袋、返回 x 的 y 次幂
    - Math.random()  随机的、返回 0 ~ 1 之间的随机数
    - Math.sqrt(x)  平方根、返回数的平方根
* 2.Date的对象
    - 属性
        - constructor  构造器、返回对创建此对象的 Date 函数的引用
        - prototype  原型、使您有能力向对象添加属性和方法。
    - 获取时间的方法
        - Date()  日期、返回当日的日期和时间
        - getDate()  （日期）从 Date 对象返回一个月中的某一天 (1 ~ 31)
        - getDay()  （天）从 Date 对象返回一周中的某一天 (0 ~ 6)
        - getMonth()  （月份）从 Date 对象返回月份 (0 ~ 11)
        - getFullYear()  （年）从 Date 对象以四位数字返回年份
        - getHours()  （时）返回 Date 对象的小时 (0 ~ 23)
        - getMinutes()  （分）返回 Date 对象的分钟 (0 ~ 59)
        - getSeconds()  （秒）返回 Date 对象的秒数 (0 ~ 59)
        - getMilliseconds()  （毫秒）返回 Date 对象的毫秒(0 ~ 999)
        - getTime()  （时间）返回 1970 年 1 月 1 日至今的毫秒数
    - 获取时间的其他方法
        - getTimezoneOffset()返回本地时间不格林威治标准时间(GMT) 的分钟差
        - getUTCDate()根据世界时从Date 对象返回月中的一天 (1~31)
        - getUTCDay()根据世界时从 Date 对象返回周中的一天 (0 ~ 6)
        - getUTCMonth()根据世界时从 Date 对象返回月份 (0 ~ 11)
        - getUTCFullYear()根据世界时从 Date 对象返回四位数的年份
        - getUTCHours()根据世界时返回 Date 对象的小时 (0 ~ 23)
        - getUTCMinutes()根据世界时返回 Date 对象的分钟 (0 ~ 59)
        - getUTCSeconds()根据世界时返回 Date 对象的秒钟 (0 ~ 59)
        - getUTCMilliseconds()根据世界时返回 Date 对象的毫秒(0~ 999)
        - parse()返回1970年1月1日午夜到指定日期（字符串）的毫秒数

    - 设置时间的方法
        - setHours()设置 Date 对象中的小时 (0 ~ 23)
        - setMinutes()设置 Date 对象中的分钟 (0 ~ 59)
        - setSeconds()设置 Date 对象中的秒钟 (0 ~ 59)
        - setMilliseconds()设置 Date 对象中的毫秒 (0 ~ 999)
        - setTime()以毫秒设置 Date 对象
    - 设置时间的其他方法
        - setUTCDate()根据世界时设置 Date 对象中月份的一天 (1 ~ 31)
        - setUTCMonth()根据世界时设置 Date 对象中的月份 (0 ~ 11)
        - setUTCFullYear()根据世界时设置 Date 对象中的年份（四位数字）
        - setUTCHours()根据世界时设置 Date 对象中的小时 (0 ~ 23)
        - setUTCMinutes()根据世界时设置 Date 对象中的分钟 (0 ~ 59)
        - setUTCSeconds()根据世界时设置 Date 对象中的秒钟 (0 ~ 59)
        - setUTCMilliseconds()根据世界时设置 Date 对象中的毫秒 (0 ~ 999)
    - Date的其他方法
        - toSource()返回该对象的源代码
        - toString()把 Date 对象转换为字符串
        - toTimeString()把 Date 对象的时间部分转换为字符串
        - toDateString()把 Date 对象的日期部分转换为字符串
        - toUTCString()根据世界时，把 Date 对象转换为字符串。
        - toLocaleString()根据本地时间格式，把 Date 对象转换为字符串。
        - toLocaleTimeString()根据本地时间格式，把 Date 对象的时间部分转换为字符串
        - toLocaleDateString()根据本地时间格式，把 Date 对象的日期部分转换为字符串。
        - UTC()根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。
        - valueOf()返回 Date 对象的原始值
# 八、JSON
* JSON.stringify(json)
    - 转成字符
* JSON.parse(str)
    - 转成对象
# 九、原型
~~~
fn.prototype.fn1=function(){
    document.write("大家好,我是"+this.name+"</br>")
}
~~~
* 不加载到每一项之中，提取出来建立公共部分（prototype）
* this指向fn.prototype
* 原型与函数的区别:
    - 相同点:调用方式相同
    - 不同点:储存位置不同
# 十、原型链
原型链：当从一个对象那里调取属性或方法时，如果该对象自身不存在这样的属性或方法，就会去自己关联的prototype对象那里寻找，如果prototype没有，就会去prototype关联的前辈prototype那里寻找，如果再没有则继续查找Prototype.Prototype引用的对象，依次类推，直到Prototype.….Prototype为undefined（Object的Prototype就是undefined）从而形成了所谓的“原型链”。（通过_proto_查找的对象）
# 十一、闭包
* 一个可以调用另一个函数内部变量的函数叫做 闭包函数;
# 十二、this的指向
### A.this的指向
* window-全局变量中this指向全局变量
    - console.log(this);
* 普通函数中this指向全局变量
    ~~~
    function fn(name){
        this.name=name;
        console.log(this);
    }
    fn();
    ~~~
* object-函数中this指向调用该方法的对象
    ~~~
    var a={
        name:"天津",
        c:function(){
            console.log(this);
        }
    }
    a.c();
    //{name: "天津", c: ƒ}
    ~~~
* fn-构造函数中this指向该构造函数的实例
    ~~~
    var b=new fn（"老干妈"）
    fn {name:"老干妈"}
    ~~~
* 原型中this指向fn.prototype
    ~~~
    fn.prototype.fn1=function(){
        this.age=”18”;
    }
    //不加载到每一项之中，提取出来建立公共部分（prototype）
    ~~~

### B.改变this的指向：call与apply
* 相同点：
    - 都是改变this的指向
    - 第一个参数都是this的新指向
* 不同点：
    - 第二个参数 call是以实际参数传入的；
    - apply是以数组形式传递的每一个参数
* 1.call的指向
    ~~~
    var thisOne={
        name:"thisOne",
        c:function(a,b){
            document.write(this.name+a+b+"</br>");
        }
    }
    thisOne.c("第一","指向");
    console.log(thisOne);
    var thisTwo={
        name:"thisTwo",
    }
    thisOne.c.call(thisTwo,"第二","指向");
    //需要传入的参数    a     b
    console.log(thisTwo);
    ~~~
* 2.apply的指向
    ~~~
    var thisOne={
        name:"thisOne",
        c:function(a,b){
        document.write(this.name+a+b+"</br>");
        }
    }
    thisOne.c("第一","指向");
    console.log(thisOne);
    var thisTwo={
        name:"thisTwo",
    }
    thisOne.c.apply(thisTwo,["第二","指向"]);
    //需要传入的参数以数组形式传入a     b
    console.log(thisTwo);
    ~~~
# 十三、定时器
* 间隔：
    ~~~
    var a=setInterval(function () {
    if(i==0){//终止间隔条件
    clearInterval(a);
    //终止间隔
        }
        time.innerHTML=i;
        i--;
    },1000)
    //1000以毫秒计算，间隔时间
    ~~~
* 延迟：
    ~~~
    var a=setTimeout(function () {
        s.innerHTML="刷新";
    },2000)
    //2000以毫秒计算，延迟时间
    clearTimeout(a);
    //清除延迟
    ~~~
# 十四、BOM操作
* window对象
    ~~~
    <iframe src="http://birdshome.top" frameborder="0" width="500px" height="500px" scrolling="auto" name="new"></iframe>
    <input type="button" class="btn" value="打开">
    <input type="button" class="btn" value="关闭">
    <input type="button" class="btn" value="窗口">
    <script>
        var btns=document.getElementsByClassName("btn");
        var innerWidth=window.innerWidth;
        var innerHeight=window.innerHeight;
        var outerWidth=window.outerWidth;
        var outerHeight=window.outerHeight;
        console.log(innerWidth);//文档显示区的宽度
        console.log(innerHeight);//文档显示区的高度
        console.log(outerWidth);//窗口外部宽度
        console.log(outerHeight);//窗口外部高度
        console.log(window.length);//浏览器内窗口的数量
        console.log(window.name);//窗口的名称
        btns[0].onclick=function () {
            window.open("http://www.baidu.com","new");
            //打开新网页
        }
        btns[1].onclick=function () {
            window.close();
            //关闭窗口
        }
        var text=window.confirm("open or close");
            //显示带有一段消息以及确认按钮和取消按钮的对话框
        if(text){
            alert("open");
        }else{
            alert("close");
        }
        var value=window.prompt("请输入年龄：");
            //显示可提示用户输入的对话框
        if(value>=18){
            alert("大孩儿");
        }else{
            alert("小孩儿");
        }
        btns[2].onclick=function () {
        window.open("window.resizeBy.html","_blank","width=300,height=500,top=	100,left=200");
        }
        scrollBy() 按照指定的像素值来滚动内容
        scrollTo() 把内容滚动到指定的坐标
    </script>
    <input type="button" class="btn" value="变大">
    <input type="button" class="btn" value="变小">
    <input type="button" class="btn" value="宽高各300">
    <script>
        var btns=document.getElementsByClassName("btn");
        btns[0].onclick=function () {
            window.resizeBy(100,100);
        }
        btns[1].onclick=function () {
            window.resizeBy(-100,-100);
        }
        btns[2].onclick=function () {
            window.resizeTo(300,300);
        }
    </script>
    ~~~
* navigator对象
    - oappCodeName返回浏览器的代码名
    - oappVersion返回浏览器的次级版本
    - oappName返回浏览器的名称
    - olanguage返回当前浏览器的语言
    - oplatform 返回运行浏览器的操作系统平台
# 十五、DOM操作
* 节点类型
    ~~~
    <div id="divId" class="divClass">
        我是BOSS;
        <p id="divP"></p>
        <span id="divSpan"></span>
    </div>
    <script>
        var divId=document.getElementById("divId")
        var divClass=document.getElementsByClassName("divClass")[0];
        var divP=document.getElementById("divP");
        var divSpan=document.getElementById("divSpan");
        //得到元素的字节
        var a=divId.getAttributeNode("id");
        console.log(a);//id=divId
        console.log(a.nodeType);//2
        //通过id获取
        //得到元素的
        console.log(divId.nodeName);//DIV
        //得到元素的类型
        console.log(divId.nodeType);//1
        //得到元素的值
        console.log(divId.nodeValue);//null
        //通过类名获取
        console.log(divClass.nodeName);//DIV
        console.log(divClass.nodeType);//1
        console.log(divClass.nodeValue);//null
        //得到子元素
        console.log(divId.childNodes);
        //NodeList(5)
        //0.text 1.p#divP 2.text 3.span 4.text
        //输出每一个元素
        console.log(divId.childNodes[0].nodeValue);//我是BOSS;
        console.log(divId.childNodes[1].nodeValue);//null
        console.log(divId.childNodes[2].nodeValue);//
        console.log(divId.childNodes[3].nodeValue);//null
        console.log(divId.childNodes[4].nodeValue);//
        /*
            判断节点的类型
            nodetype 返回值
            1--元素
            2--属性
            3--文本
        */
        //获取属性
        console.log(divId.className);//divClass
        console.log(divId["id"]);//divId
        console.log(divId.getAttribute("id"));//divId
        //设置属性
        divId.className="aaaa bbbb";
        divId.setAttribute("class","aaa bbb");
    </script>
    ~~~
* 用js添加元素
    ~~~
    <div id="box"></div>
    <script>
        var box=document.getElementById("box");
        //创建一个p标签
        var p=document.createElement("p");
        //创建一个文本
        var text=document.createTextNode("创建的文本类文档");
        //文本添加到p标签内
        p.appendChild(text);
        //p标签添加到box里
        //添加子节点
        box.appendChild(p);
        //在指定子节点前插入新的子节点
        var span=document.createElement("span")
        box.insertBefore(span,h);
        //删除一个节点
        box.removeChild(h);
        //替换节点
        var p=document.createElement("p");
        var text=document.createTextNode("<h1>用于替换的标签</h1>")
        p.appendChild(text);
        box.replaceChild(p,span);
    </script>
    ~~~
* offsetTop   获取当前元素距离他带有定位的最近的父元素 上边的距离
    - console.log(content.offsetTop);
* offsetleft   获取当前元素距离他带有定位的最近的父元素 左边的距离
    - console.log(content.offsetLeft);
# 十六、事件
* 事件监听
    - onload：用来包裹script内的内容，当页面加载完成后运行script内的代码
* 用法:
    ~~~
    <script>
        Window.onload=function(){
            原script内的内容
        }
    </script>
    ~~~
* ID获取元素：
    ~~~
    id="btn"
    var h=document.getElementById(“btn”);
    h.onclick=function(){
        alret("获取元素");
    }
    ~~~
* 类名获取元素：
    ~~~
    class=”btn”
    var h=document.getElementsByClassName(“btn”)[0];（[0]:是获取到第几个类名的元素）
    ~~~
* 标签获取元素：
    ~~~
    <input ></input>
    var h=document.getElementsByTagName("input")[0];
    ~~~
* 触发监听
    - btn.addEventListener("click",function () {}，true/false)
# 十七、方法
* children	子节点，不包含空节点
* childNodes	子节点，包含空节点
* firstChild	第一个子节点，包含空节点
* firstElementChild	第一个子节点，不包含空节点
* lastChild	最后一个子节点，包含空节点
* lastElementChild	最后一个子节点，不包含空节点
* nextSibling	下一个兄弟节点，包含空节点
* nextElementSibling	下一个兄弟节点，不包含空节点
* previousSibling	前一个兄弟节点，包含空节点
* previousElementSibling	前一个兄弟节点，不包含空节点
* parentNode	父节点
* offsetParent	第一个有定位属性的父节点，如果没有，则返回body
* onload	图片或页面加载完成
* onfocus/onblur 获得焦点/失去焦点
    ~~~
    //表单：获取焦点
    <label for="enter">
     <p class="user">用户名：</p>
     <input id="enter" class="enterUser" type="text" placeholder="请输入用户名">
    </label>
    ~~~
* onchange 表单内容发送改变
* onclick 点击
* oninput 选择输入框的文字
* ondblclick 点击两次
* onkeydown 键盘按下
* onkeyup 键盘抬起
* onmousedown 鼠标按下
* onmouseup 鼠标抬起
* onmousemove 鼠标移动
* onmouseover 移到对象上
* onmouseout 鼠标离开
* clientX clientY 页面内的位置
* onselect 在文本框中的文本被选中时发生,支持\<input type="text"\>, \s<textarea\>
* onsubmit 在表单中的提交按钮被点击时触发
* onreset 在表单中的重置按钮被点击时触发
* onerror 在文档或图像加载过程中发生错误时被触发
* 阻止默认事件preventDefault() 或者 return false