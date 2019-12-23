//创建一个唯一的reducer
import students from './student'
import counter from './counter'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from '../history'
//合并学生reducer

export default combineReducers({
    counter,
    students,
    //添加路由状态
    router: connectRouter(history)
})