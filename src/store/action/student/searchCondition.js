
/**
 * 对学生查询条件改变的action类型
 */
export const actionTypes = {
    change: Symbol("change")
}
/**
 * action创建函数
 * 根据新的查询条件,产生一个action
 * @param {*} newCondition 
 */
export function change(newCondition) {
    return {
        type: actionTypes.change,
        payload: newCondition
    }
}