## 划分
- pc布局
    + 960px/1000px居中 版心
    + 浮动
    + 定位
    + CSS3新特性
    + flex
- 响应式布局
    + 优点
    + 缺点
    + media query @media 媒体类型 and (媒体特性){}
    + 代表作
        1. http://www.youzhan.org
        2. https://www.microsoft.com/zh-cn
- 移动端布局
    + 百分比布局
        1. 特点：宽度百分比，高度固定
    + rem布局
        - font size of the root element



```html
<!--我们设置字体为16px或者不设置其实没有变化的-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    .box{
        width:160px;
        height:160px;
        background-color:red;
    }
    .text{
        color: #fff;
        font-size:16px;
    }
    </style>
</head>
<body>
    <div class="box">
        <p class="text">Hello Rem</p>
    </div>
</body>
</html>
```

```html
<!--这里我们设置成1rem也是一样的-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    .box{
        width:160px;
        height:160px;
        background-color:red;
    }
    .text{
        color: #fff;
        font-size:1rem;
    }
    </style>
</head>
<body>
    <div class="box">
        <p class="text">Hello Rem</p>
    </div>
</body>
</html>
```


```html
<!--这里我们把.box的宽度用rem来表示-->
<!--160px = 10rem-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    .box{
        width:10rem;
        height:10rem;
        background-color:red;
    }
    .text{
        color: #fff;
        font-size:1rem;
    }
    </style>
</head>
<body>
    <div class="box">
        <p class="text">Hello Rem</p>
    </div>
</body>
</html>
```

```html
<!--假如设置了html的font-size为32px,则需要作如下的改变-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    html{
        font-size:32px;
    }
    .box{
        width:5rem;
        height:5rem;
        background-color:red;
    }
    .text{
        color: #fff;
        font-size:16px;
    }
    </style>
</head>
<body>
    <div class="box">
        <p class="text">Hello Rem</p>
    </div>
</body>
</html>
```


```html
<!--利用media query+rem来实现手机屏幕改变字体的改变-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    html{
        font-size:32px;
    }
    .box{
        width:5rem;
        height:5rem;
        background-color:red;
    }
    .text{
        color: #fff;
        font-size:16px;
    }
    @media screen and (max-width:360px) and (min-width:321px){
        html{
            font-size:24px;
        }
    }
    @media screen and (max-width:320px){
        html{
            font-size:20px;
        }
    }
    </style>
</head>
<body>
    <div class="box">
        <p class="text">Hello Rem</p>
    </div>
</body>
</html>
```

```html
<!--使用js来实现动态修改rem-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    html{
        font-size:32px;
    }
    .box{
        width:5rem;
        height:5rem;
        background-color:red;
    }
    .text{
        color: #fff;
        font-size:16px;
    }
    </style>
    <script>
    //获取视窗的宽度
    var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    // console.log(htmlWidth);
    //获取视窗高度
    var htmlDom = document.getElementsByTagName('html')[0];
    //这里除以10，或者除以多少都无所谓的，大家不用介意
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';
    </script>
</head>
<body>
    <div class="box">
        <p class="text">Hello Rem</p>
    </div>
</body>
</html>
```

rem切图的思路：
1、拿到的设计稿是750px的(也可以是320px的)
2、手机的宽度是375px
3、量出来的尺寸除以75得出来的是rem的值
这里可以安装一个less的插件

代码时间：
设计搞是750px的，所以，我们基准是75px
第一步、用工具标注尺寸
第二步、开始切图

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script>
        //获取视窗的宽度
        var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
        // console.log(htmlWidth);
        //获取视窗高度
        var htmlDom = document.getElementsByTagName('html')[0];
        htmlDom.style.fontSize = htmlWidth / 10 + 'px';
    </script>
    <link rel="stylesheet" href="./reset.css">
    <style>
    .header{
        background:#222;
        padding:0 0.853rem;
    }
    .header ul{
        display: flex;
        justify-content: space-between;
        font-size:0.427rem;
        height:1.32rem;
        line-height: 1.32rem;
        color: #fff;
    }

    .banner img{
        width:100%;
        height:5.867rem;
        vertical-align: top;
    }
    </style>
</head>
<body>
    <div class="header">
        <ul>
            <li>首页</li>
            <li>首页</li>
            <li>首页</li>
            <li>首页</li>
            <li>首页</li>
        </ul>
    </div>
    <div class="banner">
        <img src="./imgs/timg.jpg" alt="">
    </div>
</body>
</html>
```


rem布局的缺点
1、retina屏幕(dpr2.0,dpr3.0)的情况下，一个像素实际上是相当于2px或者3px，也就意味着，border如果你写的是1px --> 实际上是2px或3px
2、字体容易出现奇数的情况(https://www.zhihu.com/question/20440679)

怎么解决这二个问题：
1、改变viewport的initial-scale值为0.5或者0.33333

    + flexible.js方案

    + 最新方案：https://www.w3cplus.com/css/vw-for-layout.html(了解即可)


