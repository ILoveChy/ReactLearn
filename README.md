# react-redux+dva+balabala

## react-redux

> 如果一个组件,仅用于渲染一个UI界面,而没有状态(通常是一个函数组件),该组件叫做 ***展示组件***
> 如果一个组件,仅用于提供数据,没有任何属于自己的UI界面,name该组件叫做 ***容器组件***,容器组件纯粹是为了给其他组件提供数据的

react-redux库:连接redux和react

- Provider组件:没有任何UI界面,该组件的作用,试将redux的仓库放到一个上下文中.
- connect:高阶组件,用于连接仓库和组件的
  - 参数:mapStateToProps,mapDispatchProps
  - 细节1:如果对返回的组件加上额外的属性,则这些属性则会直接传递到展示组件
  - 第一个参数:mapStateToProps:
    - 参数1:整个仓库的状态
    - 可选参数2:使用者传递的属性对象
  - 第二个参数:mapDispatchProps:
    - 情况1:传递一个函数 mapDispatchProps
      - 参数1:dispatch函数
      - 参数2:使用者传递的属性对象
      - 函数返回的对象会作为属性传递到展示组件中
    - 情况2:传递一个对象,对象的每一个属性是一个函数,它会自动的将对象里面的函数名对应到展示组件的属性中,但是功能做出一点改变,当调用这些事件处理函数时,会自动dispatch函数返回的值
  - 细节2:如果不传递第二个参数,通过connect连接的组件,会自动得到一个属性:dispatch,使得组件有能力自行触发action,但是不推荐这样做,展示组件和容器组件应该分离.

## redux和router结合(connected-react-router)

用于将redux和react-router进行结合

本质上router中的某些数据可能会跟数据仓库中的数据进行联动

该组件会将下面的路由数据和仓库保持同步

1. action:它不是redux的action,它表示当前路由跳转的方式(push\pop\replace)
2. location:它记录了当前的地址信息

该库中的内容:

### connectRouter

这是一个函数,调用它,会返回一个用于管理仓库路由信息的reducer,该函数需要传递一个参数,是一个history对象,该对象可以使用第三方库history得到

### routerMiddleware

该函数会返回一个redux中间件,用于拦截一些特殊的action

### ConnectedRouter

这是一个组件,用于向上下文提供一个history对象和其他的路由信息(与ReactRouter提供的信息一致)

之所以需要新制作一个组件,是因为该库必须保证整个过程使用的是同一个history对象
