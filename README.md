# React Router 概述

React路由

## 站点

无论是Vue,还是React,开发的单页应用程序,可能只是该站点的一部分(某一个功能块)

一个单页应用里,可能会划分为多个页面(几乎完全不同的页面效果)(组件)

如果要在单页应用中完成组件的切换,需要实现下面两个功能:
1. 根据不同的页面地址,展示不同的组件(核心)
2. 完成无刷新的跳转

我们把实现了以上两个功能的插件,称之为路由

## React Router
1. react-router:路由核心库,包含诸多和路由功能相关的核心代码
2. react-router-dom:利用路由核心库,结合实际的页面,实现跟页面路由密切相关的功能

如果是在页面中实现路由,需要安装 react-router-dom库

# 两种模式


url地址组成
例:https://www.reacttraining.com:443/react-router/1.html?a=1&b=2#sdfsfsd
1. 协议名(schema):https
2. 主机名(host):www.reacttraining.com
   1. IP地址
   2. 预设值:localhost
   3. 域名
   4. 局域网中电脑名称
3. 端口号(post):443
   1. 如果协议是http,端口号是80,则可以省略端口号
   2. 如果是https,端口号是443,则可以省略端口号
4. 路径(path):/react-router/1.html
5. 地址参数(search、query):?a=1&b=2
   1. 附带的数据
   2. 格式:属性名=属性值&属性名=属性值
6. 哈希(hash、锚点)
   1. 附带的数据 

## Hash Router 哈希路由 

根基url地址中的哈希值来确定显示的组件
> 原因:hash的变化,不会导致页面的刷新
> 这种模式的兼容性最好

## Borswer History Router 游览器历史记录路由
HTML5出现后,新增了historyAPI ,从此以后浏览器拥有了改变路径而不刷新页面的方式
History表示浏览器的历史记录,它使用栈的方式储存

1. history.length:获取栈中的数据量
2. history.pushState:向当前历史记录栈中加入一条新的记录
   1. 参数1:附加的数据,自定义数据,可以使任何类型
   2. 参数2:页面标题,目前大部分浏览器不支持
   3. 参数3:新的地址
3. history.replaceState:将当前指针指向的历史记录替换为某个记录

根据页面的路径来决定渲染哪个组件

# 路由组件

React-router 为我们提供了两个重要组件

## Router组件

它不做任何展示,仅提供路由模式配置,另外该组件会产生一个上下文,上下文中会提供一些实用的对象和方法,供其他相关组件使用

1. HashRouter:该组件,使用hash模式进行匹配
2. BrowserRouter:该组件,使用BrowserHistory进行匹配
通常情况下,Router组件只有一个,讲该组件包裹整个页面

## Route组件

根据不同的地址,展示不同的组件

重要属性:

1. path:匹配的路径
   1. 默认情况下,不区分大小写,可以设置sensitive属性为true来区分大小写
   2. 默认情况下,只匹配出事目录,如果要精确匹配,配置exact属性为true
   3. 如果不写path,则会匹配任意路径
2. component:匹配成功后要显示的组件
3. children:
   1. 传递React元素,无论是否匹配,一定会显示children,并且会忽略component属性
   2. 传递一个函数,该函数有多个参数,这些参数来自于上下文,该函数返回react元素,则一定会显示返回的元素并且忽略component属性
Route组件可以写在任意的地方,只要保证是Router组件的后代元素就行

## Swtich

写到Switch组件中的Route组件,当匹配到第一个Route后悔立即停止匹配
由于Swtich组件会循环所有子元素,然后让每一个子元素去完成匹配,如果匹配到,则渲染对应的组件,然后停止循环,因此Swtich子元素必须是**Route**