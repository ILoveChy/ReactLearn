export const actionTypes = {
    //设置学生查询结果数组和总数
    setStudentAndTotal: Symbol("setStudentAndTotal"),
    setIsLoading: Symbol("setIsLoading"),
    fetchStudents: Symbol("fetchStudents")
}
/**
 * 得到一个设置学生数组和总数的action
 * @param {Array} arr 学生数组
 * @param {Number} total 学生总数
 */
export function setStudentAndTotal(arr, total) {
    return {
        type: actionTypes.setStudentAndTotal,
        payload: {
            datas: arr,
            total
        }
    }
}

/**
 * 得到一个设置是否正在加载中的action
 * @param {Boolean} isLoading 是否正在加载中
 */
export function setIsLoading(isLoading) {
    return {
        type: actionTypes.setIsLoading,
        payload: isLoading
    }
}

/**
 * 根据当前仓库中的查询条件,查询学生
 */
export function fetchStudents() {
    return {
        type: actionTypes.fetchStudents,
    }
}
