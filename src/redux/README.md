# createStore

该对象的成员:

- dispatch:分发一个action
- getState:得到仓库中当前的状态
- subscribe:注册一个监听器,监听器是一个无参函数,该分发一个action之后,会进行注册的监听器.该函数会返回一个函数,用于取消监听

# bindActionCreators

# combineReducers

组装reducer,返回一个reducer,数据使用一个对象表示,对象的属性名与传递的参数对象保持一致
