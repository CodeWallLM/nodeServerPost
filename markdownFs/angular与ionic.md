---
title: angular与ionic
tags:
    - 移动端
categories:
    - 移动端
description:
    - 移动端
---
# 一、Angular
* AngularJS 通过新的属性和表达式扩展了 HTML。
* AngularJS 可以构建一个单一页面应用程序（SPAs：Single Page Applications）。
* MVC：M（model数据）、V（view视图）、C（controller控制器）
### 1.指令
* ng-app=””:初始化一个应用程序
* ng-model 和ng-bind 都是用来绑定数据的;
    - 区别:  ng-model 绑定所有的带有输入域的元素
    - 其他元素用ng-bind绑定
* ng-init :  初始化数据
* ng-repeat=”x in arr”:循环数组，创建元素，数组中不可有重复元素
    - 数组: `x in model` x代表 数组中的每一项数据;
    - 对象(object) `x in model` x代表对象中的每一项的值。
* 自定义指令
    - app.directive()用来创建指令
    - 可以创建四种类型的指令:
        - ECMA: E:元素,C:类名,M:注释,A: 属性,默认创建的是EA
    - 有两个参数：
        - 第一个参数：指令名称（驼峰命名法）；
        - 第二个参数：是一个函数，并且函数要返回一个对象；
    - 对象内容：
        - restrict: 类型
        - replace: 替换 ps:如果要用在M上面,必须加这个属性,值是true;
        - template：模板
        ~~~
        app.directive("firstName",function () {
            return {
                restrict : "M",
                replace:true；//只是M的时候用
                template:"<h1>三</h1>",
            };
        })<br>
        ~~~
    * 使用:
        - 指令名称: 要把驼峰命名全部写成小写,大写小写加-
        - E: 元素:
            ~~~
            <runoob-directive></runoob-directive>
            ~~~
        - C: 类名:
            ~~~
            <div class="runoob-directive"></div>
            ~~~
        - A: 属性:
            ~~~
            <div runoob-directive></div>
            ~~~
        - M: 注释:
            ~~~
            <!-- directive: runoob-directive -->
            ~~~
        - 注释的内容前后要有空格,要以directive: 开始,空格+指令名称
### 2.创建一个angular项目
~~~
var app=angular.module("myapp",[]);
~~~
* 第一个参数是项目名称；第二个参数是数组，作用用于依赖注入。
### 3.创建一个控制器
~~~
app.controller("mycontroller",function ($scope) {})
~~~
* 用来创建一个控制器
    - 第一个参数是: 控制器名称.
    - 第二个参数是一个函数,函数中有一个$scope ,$scope是所有数据的一个集合
### 4.作用域
~~~
app.controller("myctll2",function ($scope,$rootScope) {
    $scope.text="李四"; //局部变量
    $rootScope.text="王五"; //全局变量
})
~~~

* $scope  (  html 和  controller(js) 的桥梁 ) ( 所有数据和方法的集合 )
    - 作用域: $scope的作用域只在他当前的控制器中有效,在其他地方无效
* $rootScope (  scope 和  controller(js) 的桥梁 )
    - 作用域: $rootScope 的作用域是当前angular项目中
    - $rootScope 可作用于整个应用中。是各个 controller 中 scope 的桥梁。用 rootscope 定义的值，可以在各个 controller 中使用。
* AngularJS 应用组成如下：MVC
    - Model(数据模型), 当前视图中可用的数据。
    - View(视图模型), 即 HTML。
    - Controller(控制器), 即 JavaScript 函数，可以添加或修改属性。
### 5.过滤器
* 用 | 隔开就是过滤器的表达式
* currency：格式化数字为货币格式
* filter：从数组项中选择一个子集
* lowercase：格式化字符串为小写
* uppercase：格式化字符串为大写
* orderBy：根据某个表达式排列数组
* 自定义过滤器
    ~~~
    <h2>你可能得到:{{text|money|currency:"¥":"5"}}</h2>
    app.filter("money",function () {
         return function (a) {
            var x=a*10;
            return x
         }
    });
    ~~~
#### 6.服务
* 地址栏
    ~~~
    <h1>$locationUrl: {{absurl}}<h1>
    <h1>locationUrl:{{url}}<h1>
    ~~~
* 需要先在函数中传入这个参数$location，然后在调用；
    ~~~
    app.controller("mycoll",function ($scope,$location) {
        $scope.absurl=$location.absUrl();
        $scope.url=window.location.href;
    })
    ~~~
* 时间函数
    ~~~
    //$timeout,$interval使用与地址栏相同
    app.controller('myCtrl', function($scope, $interval) {
        $scope.theTime = new Date().toLocaleTimeString();
        $interval(function () {
            $scope.theTime = new Date().toLocaleTimeString();
        },1000);
    });
    ~~~
* 自定义服务
    ~~~
    <div ng-controller="mycon">
        <input type="text" ng-model="text">
        <input type="text" ng-model="txt">
        <input type="button" ng-click="fn()" value="按钮">
        //angular的点击
        <h1>{{res}}</h1>
    </div>
    <script>
        var app=angular.module("myApp",[]);
        app.service("string",function () {
            //第一个参数：自定义服务名称
            //第二个参数：一个函数
            this.spli=function (a,b) {
            //this指向自定义服务的名称（string）
                return a.split(b);
            }
        })
        app.controller("mycon",function ($scope,string) {
            $scope.fn=function () {
                $scope.res=string.spli($scope.text,$scope.txt)
                //使用需要先传入参数
            }
        })
    </script>
    ~~~
# 二、Angular路由
~~~
<h2>AngularJS 路由应用</h2>
<ul>
    <li><a href="#/">首页</a></li>
    <li><a href="#/computers">电脑</a></li>
    <li><a href="#/printers">打印机</a></li>
    <li><a href="#/blabla">其他</a></li>
</ul>
<div ng-view></div>
//用以调用过来存放数据
<script src="http://apps.bdimg.com/libs/angular.js/1.4.6/angular.min.js"></script>
<script src="http://apps.bdimg.com/libs/angular-route/1.3.13/angular-route.js"></script>
<script>
     angular.module('routingDemoApp',['ngRoute']).config(['$routeProvider',function ($routeProvider){
     $routeProvider
        .when('/',{template:'这是首页页面'})
        //第一个参数用以hash的跳转
        //第二个参数用于存放跳转的地址(跳转页面的hash)/存放所要显示的内容
        //hash值所跳转的
        .when('/computers',
            {
                template:'这是电脑分类页面'
            }
        )
        .when('/printers',
            {
                template:'这是打印机页面'
             }
        )
        //没有此hash值需要返回的
        .otherwise(
            {
                redirectTo:'/'
            }
        );
     }]);
</script>
~~~
# 三、Ionic
### 1.ionic路由
~~~
主界面：
app.config(function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
$stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,
	   //抽象路由：不可单元存在，必须有子路由才可以存在
        templateUrl:"tabs.html"
    });
$stateProvider.state("tabs.a",{
    //单一页面  a.html
    url:"/a",
    views:{
            "tabs_a1":{
                //复选框里每个选项的中view的name属性，用于确定视图在哪里加载
                templateUrl:"a1.html"
            }
        }
    })
    $urlRouterProvider.otherwise("/tabs/a1");
    //默认页面
})
~~~
~~~
//复选框界面（tabs.html）：
<ion-tabs class="tabs-positive tabs-icon-top">
    <ion-tab title="首页" icon-on="ion-ios-filing" icon-off="ion-ios-filing-outline" ui-sref="tabs.a">
        <ion-nav-view name="tabs_a"></ion-nav-view>
    </ion-tab>
</ion-tabs>
~~~
~~~
//单页界面（a.html）：
<ion-view title="a页面">
    <ion-content>
        <h1>我是a页面</h1>
        <p ui-sref="tabs.b">通过状态跳转到b页面</p>
        <p ui-sref="tabs.c">通过状态跳转到c页面</p>
        <a href="#/tabs/b">通过url 跳转到b页面</a><br>
        <a href="#/tabs/c">通过url 跳转到c页面</a><br>
        <button class="button button-calm" ui-sref="ff">点击通往ff页面的按钮</button>
    </ion-content>
</ion-view>
~~~
# 四、angular与ionic路由的区别
* 路由的作用，简单的概括就是基于View和Url的对应关系，处理跳转页面。
    - 在AngularJS中，我们使用的路由功能是由模块ng-route提供的，ngRoute的思路就是最简单的路由思想，我们只需要指定每一个url对应的视图就可以了。因为ng-route现在成为一个独立的模块了，所以我们想要使用它的时候，还得去自己安装，并且在代码中显式地依赖这个模块，多少显得有些麻烦。
    - 但是，在Ionic项目中，除了可以使用ngRoute之外，我们还可以使用一种更加强大的路由模块ui-router。并且有个好处就是，ui-router不需要我们额外引入，因为在ionic.js中就已经帮我们做了这项工作了。
* ui-router
    - 在ui-router中，有3个关键词：状态（state）、Url、模板（template），也就是说，它在ng-route的基础之上，增加了“状态”的概念。这三者是一对一的关系：每一个模板，存在于一个特定的Url，同时也对应于一个独一无二的状态。
    - 所以，我们想要在代码中控制页面跳转的时候，既可以基于url，用href的方式进行跳转，也可以进行状态的转换，两者都可以达到切换template的目的。
# 五、下拉刷新
~~~
<!--html-->
<ion-content has-bouncing="true"
             scroll="true"
             overflow-scroll="false"
             has-bouncing="true">
    <ion-refresher
      pulling-text="下拉刷新..."
      pulling-icon="ion-load-d"
      refreshing-icon="ion-thumbsup"
      refreshing-text="刷新成功"
      on-refresh="doRefresh()">
    </ion-refresher>
</ion-content>
<!-- 控制器 -->
$scope.doRefresh=function () {
  // 停止广播ion-refresher
  $scope.$broadcast('scroll.refreshComplete');
};
~~~