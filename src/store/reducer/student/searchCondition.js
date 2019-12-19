import { actionTypes } from '../../action/student/searchCondition'
const initialState = {
    key: '',
    sex: -1,
    page: 1,
    limit: 10
}
/**
 * 控制查询条件的reducer
 * @param {*} state 
 * @param {*} action 
 */
export default function (state = initialState, { type, payload }) {
    switch (type) {
        case actionTypes.change:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
}