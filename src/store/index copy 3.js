import { createStore } from "../redux"
import { bindActionCreators } from 'redux'
import reducer from './reducer/index'
import { createAddUserAction, createDeleteUserAction } from './action/userAction'



const store = createStore(reducer);

const actionCreators = {
    addUser: createAddUserAction,
    deleteUser: createDeleteUserAction
}
const actions = bindActionCreators(actionCreators, store.dispatch)
const UnListen = store.subscribe(() => {
    console.log("监听器1", store.getState());
})

actions.addUser({ id: 4, name: "saad", age: 21 })

actions.deleteUser(4)