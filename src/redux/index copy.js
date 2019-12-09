import { createStore, bindActionCreators } from "redux"
import reducer from './reducer/index'
import * as numberAction from './action/numberAction'



//假设仓库中仅存放了一个数字,该数字的变化可能是+1或-1
//约定action的格式:{type:"操作类型",payload:附加数据}



const store = createStore(reducer, 10);
//第一个参数是action创建函数合并的对象,第二个参数是仓库的dispatch函数
//得到一个新的对象,新对象中的属性名与第一个参数的属性名一致
const boundActions = bindActionCreators(numberAction, store.dispatch)


console.log(store.getState());//得到仓库中当前的数据
//得到一个increase action并直接分发
boundActions.getIncreaseAction();//向仓库分发action
console.log(store.getState());//得到仓库中当前的数据
boundActions.getSetAction(15)
console.log(store.getState());