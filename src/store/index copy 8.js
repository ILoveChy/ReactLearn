import { createStore, bindActionCreators } from "../redux"
import reducer from './reducer/index'
import { createAddUserAction, createDeleteUserAction } from './action/userAction'
// import { applyMiddleware } from "redux";

const store = createStore(reducer);
let oldDispatch = store.dispatch;
store.dispatch = function (action) {
    console.log('中间件1');
    console.log('旧数据', store.getState());
    console.log('action', action);
    oldDispatch(action)
    console.log('新数据', store.getState());
    console.log("");
}
oldDispatch = store.dispatch;
store.dispatch = function (action) {
    console.log('中间件2');
    console.log('旧数据', store.getState());
    console.log('action', action);
    oldDispatch(action)
    console.log('新数据', store.getState());
    console.log("");
}
const actionCreators = {
    addUser: createAddUserAction,
    deleteUser: createDeleteUserAction
}
const actions = bindActionCreators(actionCreators, store.dispatch)
store.subscribe(() => {
    //输出之前的状态,输出新的状态,输出触发的action
    // console.log("监听器1", store.getState());
})
actions.addUser({ id: 4, name: "saad", age: 21 })
actions.deleteUser(4)
