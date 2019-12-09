
export const SETLOGINUSERTYPE = Symbol("set-login-user");

/**
 * 设置登录用户的action
 * @param {*} user 当前登录的用户
 */
export function createSetLoginUserAction(user) {
    return {
        type: SETLOGINUSERTYPE,
        payload: user
    }
}


