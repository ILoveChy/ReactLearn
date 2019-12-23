import { takeEvery, put } from "redux-saga/effects";
import { actionTypes, setIsLoading, setStudentAndTotal } from "../action/student/searchResult";
import { searchStudents } from "../../services/student";


function* fetchStudents() {
    //设置为正在加载中
    yield put(setIsLoading(true))
    //当saga发现得到的结果是一个Promise对象,他会自动等待Promise完成
    //完成后会把完成的经过作为值传递到下一次next
    //如果Promise对象被拒绝,saga会使用generator.throw抛出一个错误
    const res = yield searchStudents();
    yield put(setStudentAndTotal(res.datas, res.cont))
    yield put(setIsLoading(false))
}
export default function* () {
    yield takeEvery(actionTypes.fetchStudents, fetchStudents);
}