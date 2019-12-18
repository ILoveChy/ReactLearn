import loginUser from './loginUser'
import users from './users'
import number from './number'
import { combineReducers } from '../../redux'



export default combineReducers({
    loginUser,
    users,
    number
})