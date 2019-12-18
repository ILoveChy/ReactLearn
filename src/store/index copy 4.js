import { createStore, bindActionCreators } from "../redux"
// import { bindActionCreators } from 'redux'
import reducer from './reducer/index'
import { createAddUserAction, createDeleteUserAction } from './action/userAction'



const store = createStore(reducer);

const addUser = bindActionCreators(createAddUserAction, store.dispatch)
const deleteUser = bindActionCreators(createDeleteUserAction, store.dispatch)
const UnListen = store.subscribe(() => {
    console.log("监听器1", store.getState());
})

addUser({ id: 4, name: "saad", age: 21 })
addUser({ id: 1, name: "saad", age: 21 })
addUser({ id: 2, name: "saad", age: 21 })
addUser({ id: 3, name: "saad", age: 21 })
addUser({ id: 5, name: "saad", age: 21 })
deleteUser(4)