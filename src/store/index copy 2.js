import { createStore } from "../redux"
import reducer from './reducer/index'
import { createAddUserAction, createDeleteUserAction } from './action/userAction'
import { createIncreaseAction } from './action/numberAction'



const store = createStore(reducer);
const UnListen = store.subscribe(() => {
    console.log("监听器1", store.getState());
})

store.dispatch(createAddUserAction({ id: 3, name: 'abc', age: 10 }));
UnListen()//取消监听
store.dispatch(createDeleteUserAction(3));
store.dispatch(createIncreaseAction());