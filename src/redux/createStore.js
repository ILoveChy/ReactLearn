import ActionTypes from './utils/ActionTypes'
import isPlainObject from './utils/isPlainObject'


/**
 * 实现createStore的功能
 * @param {function} reducer reducer
 * @param {any} defaultState 默认的状态值
 */
export default function (reducer, defaultState) {
    let currentReducer = reducer;//当前使用的reducer
    let currentState = defaultState;//当前的状态
    let listeners = [];
    function dispatch(action) {
        //验证action
        if (!isPlainObject(action)) {
            throw new TypeError("action不是一个平面对象")
        }
        //验证action的type属性是否存在
        if (action.type === undefined) {
            throw new TypeError("action必须存在一个type属性")
        }
        currentState = currentReducer(currentState, action);
        //运行所有的订阅者(监听器)
        for (const listener of listeners) {
            listener();
        }
    }
    function getState() {
        return currentState
    }
    /**
     * 添加一个监听器(订阅器)
     * @param {*} param 
     */
    function subscribe(listener) {
        listeners.push(listener);//将监听器加入到数组中
        let isRemove = false; //是否已经移除
        return function () {
            if (isRemove) {
                return
            }
            //将listener从数组中移除
            const index = listeners.indexOf(listener)
            listeners.splice(index, 1)
            isRemove = true
        }
    }
    //创建仓库时,需要分发一次初始的action
    dispatch({
        type: ActionTypes.INIT()
    })

    return {
        dispatch,
        getState,
        subscribe
    }
}