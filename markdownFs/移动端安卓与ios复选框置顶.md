---
title: 移动端事件
tags:
    - Android、ios
    - 手机端点透事件
categories:
    - 移动端
description:
    - 点透事件、复选框置顶
---
# 一、手机端点透事件
* 移动端点透事件用fastclick插件解决（引入就可以）
* 手机端js用Zepto
    - Zepto更轻量；
    - Zepto是jQuery的精简，去除大量的jQuery兼容代码；
    - 部分api实现方式不同：
    - 针对移动端程序，Zepto有一些基本的触摸事件可以用来做触摸屏交互（tap事件、swipe事件）
# 二、Android与ios置顶问题
先要引入$ionicConfigProvider
~~~
$ionicConfigProvider.platform.ios.tabs.style('standard');
$ionicConfigProvider.platform.ios.tabs.position('bottom');
$ionicConfigProvider.platform.android.tabs.style('standard');
$ionicConfigProvider.platform.android.tabs.position('standard');

$ionicConfigProvider.platform.ios.navBar.alignTitle('center');
$ionicConfigProvider.platform.android.navBar.alignTitle('left');

$ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
$ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

$ionicConfigProvider.platform.ios.views.transition('ios');
$ionicConfigProvider.platform.android.views.transition('android');
~~~