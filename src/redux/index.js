import { createStore } from "redux"
import reducer from './reducer/index'
import { createAddUserAction, createDeleteUserAction } from './action/userAction'
import { createIncreaseAction } from './action/numberAction'
import uuid from 'uuid'



const store = createStore(reducer);

const UnListen = store.subscribe(() => {
    console.log(store.getState());

})

store.dispatch(createAddUserAction({ id: 3, name: 'abc', age: 10 }));
UnListen()
store.dispatch(createDeleteUserAction(3));
store.dispatch(createIncreaseAction());