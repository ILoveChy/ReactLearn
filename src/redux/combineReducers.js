import isPlainObject from './utils/isPlainObject'
import ActionTypes from './utils/ActionTypes'
function validateReducers(reducers) {
    if (typeof reducers !== "object") {
        throw new TypeError("reducers必须是对象")
    }
    if (!isPlainObject(reducers)) {
        throw new TypeError("reducers必须是平面对象")
    }
    //验证reducer的返回结果是不是undefined
    for (const key in reducers) {
        if (reducers.hasOwnProperty(key)) {
            const reducer = reducers[key];//拿到reducer
            // 传递一个特殊的type值
            let state = reducer(undefined, {
                type: ActionTypes.INIT()
            })
            if (state === undefined) {
                throw new TypeError("reducer不能返回undefined")
            }
            state = reducer(undefined, {
                type: ActionTypes.UNKNOWN()
            })
            if (state === undefined) {
                throw new TypeError("reducer不能返回undefined")
            }
        }
    }
}

export default function (reducers) {
    //验证
    validateReducers(reducers)
    /** 
     * 返回的是一个reducer函数
     */
    return function (state = {}, action) {
        const newState = {};//要返回的新的状态
        for (const key in reducers) {
            if (reducers.hasOwnProperty(key)) {
                const reducer = reducers[key];
                newState[key] = reducer(state[key], action)
            }
        }
        return newState;//返回状态
    }
}