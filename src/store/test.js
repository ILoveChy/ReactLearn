import store from './index'
// import { change } from './action/student/searchCondition'
import { fetchStudents } from './action/student/searchResult'


// store.dispatch(change({
//     key: "acb",
//     page: 2
// }))

store.dispatch(fetchStudents())
