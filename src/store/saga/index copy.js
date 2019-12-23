import { take } from 'redux-saga/effects'
import { actionTypes } from '../action/counter'
/**
 * saga任务
 */
export default function* () {
    while (true) {
        const action = yield take(actionTypes.increase);
        console.log('发生了异步的increase', action);
    }
}