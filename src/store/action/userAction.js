import { getAllStudents } from '../../services/student'
export const ADDUSER = Symbol("add-user");
export const DELETEUSER = Symbol("delete-user");
export const UPDATEUSER = Symbol("update-user");
export const SETUSERS = Symbol("set-users");
export const SETLOADING = Symbol("set-loading"); //设置加载状态

export const createAddUserAction = (user) => ({
    type: ADDUSER,
    payload: user
})

export const createDeleteUserAction = (id) => ({
    type: DELETEUSER,
    payload: id
})


export const createUpdateUserAction = (id, newUserData) => ({
    type: UPDATEUSER,
    payload: {
        ...newUserData,
        id
    }
})

export const createSetUserAction = users => ({
    type: SETUSERS,
    payload: users //用户数组
})
/**
 * 返回一个设置加载状态的action
 * @param {*} isLoading  是否正则加载
 */
export const createSetLoadingAction = isLoading => ({
    type: SETLOADING,
    payload: isLoading
})

export const fetchUsers = () => {
    //由于thunk的存在 ,允许action是一个带有副作用的函数
    return async function (dispatch) {
        dispatch(createSetLoadingAction(true));//正在加载
        const users = await getAllStudents()
        const action = createSetUserAction(users)
        dispatch(action)
        dispatch(createSetLoadingAction(false));
    }
}
