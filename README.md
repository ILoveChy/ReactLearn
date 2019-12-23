# Redux核心概念

action reducer store

## MVC

它是一个UI的解决方案,用于降低UI,以及UI关联的数据的复杂度.

**服务器端的MVC**

环境:

1. 服务端需要一个响应的完整的HTML
2. 该HTML中包含页面需要的数据
3. 浏览器仅承担渲染页面的作用

以上的方式叫做**服务端渲染**,,即服务端将完整的页面组装好之后,一起发送给客户端.

服务器端需要处理UI中要用到的数据,并且要讲数据嵌入到页面中,最终生成一个完整的HTML页面响应

为了降低处理这个过程的复杂度,出现了MVC模式

>**Controller**:处理请求,组装这次请求需要的数据

>**Model**:需要用于UI渲染的数据模型

>**View**:用于数据组装到界面中

**前端MVC模式的困难**

React解决了 数据 -> 试图 的问题

1. 前端的controller要比服务器复杂很多,因为前端的controller处理的是用户的操作,而用户的操作场景是复杂的
2. 对于那些组件化的框架(vue/react),它们使用的是单向数据流.若需要共享数据,则必须将数据提升到顶层组件,虽然可以使用上下文提供共享数据,但对数据的操作难以监控,容易导致调试错误的困难,以及数据还原的困难.并且若开发一个大中型项目,共享的数据很多,会导致上下文中的数据变得非常庞大

比如,上下文中有如下格式的数据:

```js
value={
    users:[{},{},{},{}],
    addUser:function(u){},
    updateUser:function(u){},
    delectUser:function(u){},
}
```

## 前端需要一个独立的数据解决方案

**Flux**

FaceBook提出的数据解决方案,它的最大的历史意义,在于它引入了action的概念

`action`是一个普通的对象,用于描述了要干什么,***action是触发数据变化的唯一原因***

`store`表示数据仓库,用于存储共享数据,还可以根据不同的action更改仓库中的数据

`dispatch`分发

示例:

```js
var loginAction={
    type:"login",
    payload:{
        loaginId:"admin",
        loginPwd:"123456"
    }
}
var deleteAction={
    type:"delete",
    payload:1 //用户id为1
}
```


**Redux**

在Flux的基础上,引入了reducer的概念

`reducer`:处理器,用于根据action来处理数据,处理后的数据会被仓库重新保存

# Action 

1. action是一个plain-object(平面对象)
   1. 它的原型_propto_指向Object.prototype
2. 通常使用```payload```属性表示附加数据,没有强制要求
3. action中必须有```type```属性,该属性用于描述操作的类型
   1. 但是,没有对type的类型做出要求
4. 在大型项目中,由于操作类型非常多,为了避免硬编码(hard code),会将action的类型存放到一个或者一些单独的文件中(样板代码)
5. 为了方便传递action,通常会使用action创建函数(action creator)来创建action
   1. action创建函数应为无副作用的纯函数
      1. 不能以任何形式改动参数
      2. 不可以有异步
      3. 不可以对外部环境中的数据造成影响
6. 为了方便利用action创建函数来分发(触发)action,redux提供了一个函数```bindActionCreators```,该函数用于增强action创建函数的功能,使他不仅可以创建完成action,并且创建完成后自动完成分发

# Reducer

Reducer是用于改变数据的函数

1. 一个数据仓库,有且仅有一个reducer,并且通常情况下,一个工程只有一个仓库,因此,一个系统只有一个reducer
2. 为了方便管理,通常会将reducer放到单独的文件中
3. reducer被调用的时机
   1. 通过store.dispatch,分发了一个action,此时会调用reducer
   2. 当创建一个store的时候,会调用一次reducer
      1. 可以利用这一点,用reducer初始化状态
      2. 创建仓库时,不传递任何默认状态
      3. 将reducer的参数设置一个默认值
4. reducer内部通常使用swtich来判断type值
5. ***reducer必须是一个没有副作用的纯函数***
   1. 为什么需要纯函数
      1. 纯函数有利于测试和调试
      2. 有利于还原数据
      3. 有利于将来和react结合时的优化
   2. 具体要求
      1. 不能改变参数,因此若要让状态变化,必须要得到一个新的状态
      2. 不能有异步
      3. 不能对外部环境造成影响
6. 由于在大中型项目中 操作比较复杂 数据结构也比较复杂,因此需要对reducer进行细分
   1. redux提供了一个方法,可以帮助我们更加方便的合并reducer==> 
       > ```combineReducers({reducer1,reducer2})```
   2. combineReducers:合并reducer,得到一个新的reducer,该新的reducer管理一个对象,该对象中的每一个属性交给对应的reducer进行管理

# Store

Store:用于保存数据

通过createStore方法创建的对象

该对象的成员:

- dispatch:分发一个action
- getState:得到仓库中当前的状态
- replaceReducer:替换掉当前的reducer
- subscribe:注册一个监听器,监听器是一个无参函数,该分发一个action之后,会进行注册的监听器.该函数会返回一个函数,用于取消监听

# Redux中间件(Middleware)

中间件:类似于插件,可以在不影响原本功能,并且不改动原本代码的基础上,对其功能进行增强.在Redux中,中间件主要用于增强dispatch函数.

实现Redux中间件原理,是更改dispatch函数

Redux中间件书写:

- 中间件本身是一个函数,该函数接收一个store参数,表示创建的仓库,该仓库并非一个完整的仓库对象,仅包含getState,dispatch.该函数运行的时间,是在仓库创建之后运行
- 由于创建仓库后需要自动运行设置的中间件函数,因此,需要在创建仓库时,告诉仓库有哪些中间件
- 需要调用applyMiddleware函数,将函数的返回结果作为createStore的第二或第三个参数
- 中间件函数必须返回一个dispatch创建函数

- applyMiddleware函数用于记录有哪些中间件,会返回一个仓库创建函数
  - 该函数用于记录创建仓库的方法,然后又返回一个函数
  
# 利用中间件进行副作用处理

## redux-thunk

thunk允许action是一个带有副作用的函数,当action是一个函数被分发时,thunk会阻止action继续向后移交.

thunk会想函数中传递三个参数

- dispatch:来自于store.dispatch
- getState:来自于store.getState
- extra:来自于用户设置的额外参数

## redux-promise

## redux-saga

> 中文文档:<https://redux-saga-in-chinese.js.org/>

- 纯净
- 强大
- 灵活

在saga任务中,如果yield了一个普通数据,saga不作任何处理,仅仅将数据传递给yield表达式(吧得到的数据放在next的参数中),因此,在saga中,yield一个普通数据没什么意义.

saga需要在你yield后面放上一些合适的saga指令(saga effects),如果放的是指令,saga中间件会根据不同的指令进行特殊处理,一控制整个任务的流程.

每个指令本质上就是一个函数,该函数调用后,会返回一个指令对象,saga会接收到该指令对象,并进行处理

***一旦saga任务完成(生成器函数运行完成),则saga中间件一定结束***

***指令前面必须使用yield,以确保该指令的返回结果被saga控制***

- take指令: <font color="#f40">会造成阻塞</font> 监听某个action,如果action发生了,则会进行下一步处理,take指令仅监听一次.yield得到的是完整的action对象
- all指令:<font color="#f40">会造成阻塞</font> 该函数传入一个数组,数组中放入生成器,saga会等待所有的生成器全部完成后才会进一步处理
- takeEvery指令:不断地监听某个action,当某个action到达之后运行一个函数.takeEvery永远不会结束当前的生成器
- delay指令:<font color="#f40">会造成阻塞</font>阻塞指定的毫秒数
- put指令:用于重新出发action,相当于dispatch一个action
- call指令:<font color="#f40">可能阻塞</font>用于副作用(通常是异步)函数调用
- apply指令:同call指令
- select指令:用于得到当前仓库中的数据
- cps指令:<font color="#f40">可能阻塞</font>用于调用那些传统的回调方式的异步函数
- fork:用于开启一个新的任务,该任务不会阻塞,该函数需要传递一个生成器函数,fork返回一个对象,类型为Task
- cancel:用于取消一个或多个任务,实际上,取消的实现原理,是利用generator.return.cancel可以不传递参数,如果不传递参数,则取消当前任务
- takeLastest:功能和takeEvery一致,只不过,会自动取消掉之前开启的任务
- cancelled:判断当前任务先是否被取消掉了
- race:<font color="#f40">阻塞</font>竞赛,可以传递多个指令,当其中任何一个指令结束后,会直接结束,与Promise.race类似,返回的结果,是最先完成的指令结果


