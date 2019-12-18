/**
* 判断一个对象是否是平面对象
* @param {*} obj 
*/
export default function isPlainObject(obj) {
    if (typeof obj !== "object") {
        return false
    }
    return obj.__proto__ === Object.prototype
}