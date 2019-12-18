export default function (actionCreators, dispatch) {
    if (typeof actionCreators === "function") {
        return getAutoDispatchActionCreator(actionCreators, dispatch)
    }
    else if (typeof actionCreators === "object") {
        const result = {}; //返回结果
        for (const key in actionCreators) {
            if (actionCreators.hasOwnProperty(key)) {
                const actionCreator = actionCreators[key];//取出对应的属性值
                if (typeof actionCreator === "function") {
                    result[key] = getAutoDispatchActionCreator(actionCreator, dispatch)
                }
            }
        }
        return result;
    }
    else {
        throw new TypeError("函数的第一个参数actionCreators必须是一个action创建函数或者action创建函数的对象")
    }
}
/**
 * 得到一个自动分发的action创建函数
 */
function getAutoDispatchActionCreator(actionCreator, dispatch) {
    return function (...args) {
        const action = actionCreator(...args)
        dispatch(action);
    }
}