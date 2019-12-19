//创建一个唯一的reducer
import students from './student'
import { combineReducers } from 'redux'

//合并学生reducer

export default combineReducers({
    students
})