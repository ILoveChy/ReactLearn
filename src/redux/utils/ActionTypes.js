/**
 * 得到一个指定长度的随机字符串
 * @param {*} length 
 */
function getRandomStr(length) {
    return Math.random().toString(36).substr(2, length).split("").join(".")
}


export default {
    INIT() {
        return `@@redux/INIT${getRandomStr(6)}`
    },
    UNKNOWN() {
        return `@@redux/PROBE_UNKNOWN_ACTION${getRandomStr(6)}`
    }
}