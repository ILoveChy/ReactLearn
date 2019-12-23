import store from './index'
// import { change } from './action/student/searchCondition'
import { asyncIncrease, asyncDecrease, increase, decrease } from './action/counter'

import { fetchStudents } from './action/student/searchResult'

// store.dispatch(fetchStudents())

// store.dispatch(change({
//     key: "acb",
//     page: 2
// }))
window.increase = function () {
    store.dispatch(increase())
}

window.fetchStudents = function () {
    store.dispatch(fetchStudents())
}
window.asyncIncrease = function () {
    store.dispatch(asyncIncrease())
}
window.asyncDecrease = function () {
    store.dispatch(asyncDecrease())
}
window.decrease = function () {
    store.dispatch(decrease())
}

