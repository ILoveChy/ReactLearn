import searchCondition from './searchCondition'
import searchResult from './searchResult'
import { combineReducers } from 'redux'

//合并学生reducer

export default combineReducers({
    searchCondition,
    searchResult
})