import { actionTypes, setIsLoading, setStudentAndTotal } from "../action/student/searchResult"
import { takeEvery, put, call, select } from "redux-saga/effects"
import { searchStudents } from "../../services/student"
// import store from '../../store'
function* fetchStudents() {
    //设置为正在加载中
    yield put(setIsLoading(true))
    const condition = yield select(state => state.students.searchCondition);
    //使用call指令，按照当前仓库中的条件
    try {
        const res = yield call(searchStudents, condition)

        yield put(setStudentAndTotal(res.datas, res.cont))
    }
    catch (err) {
        console.log(err.message);
    }
    finally {
        yield put(setIsLoading(false));
    }
}

export default function* () {
    yield takeEvery(actionTypes.fetchStudents, fetchStudents);
}