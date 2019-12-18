import { createStore, bindActionCreators, applyMiddleware } from "redux"
import reducer from './reducer/index'
import { createAddUserAction, createDeleteUserAction } from './action/userAction'


/**
 * 一个中间件函数
 * @param {*} store 
 */
const logger1 = store => next => action => {
    console.log('中间件1');
    console.log('旧数据', store.getState());
    console.log('action', action);
    next(action)
    console.log('新数据', store.getState());
    console.log("");
}
/**
 * 一个中间件函数
 * @param {*} store 
 */
const logger2 = store => next => action => {
    console.log('中间件2');
    console.log('旧数据', store.getState());
    console.log('action', action);
    next(action)
    console.log('新数据', store.getState());
    console.log("");
}

//应用中间件,方式1
const store = createStore(reducer, 111, applyMiddleware(logger1, logger2));

const actionCreators = {
    addUser: createAddUserAction,
    deleteUser: createDeleteUserAction
}
const actions = bindActionCreators(actionCreators, store.dispatch)
// store.subscribe(() => {
//     //输出之前的状态,输出新的状态,输出触发的action
//     // console.log("监听器1", store.getState());
// })
actions.addUser({ id: 4, name: "saad", age: 21 })
actions.deleteUser(4)
