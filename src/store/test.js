import store from './index'
import { fetchUsers } from './action/userAction'


store.dispatch(fetchUsers());//正在加载
