import { actionTypes } from '../../action/student/searchResult'
const initialState = {
    datas: [],
    total: 0,
    isLoading: false
}

/**
 * 控制查询结果的reducer
 * @param {*} state 
 * @param {*} action 
 */
export default function (state = initialState, { type, payload }) {
    console.log(type, payload, state);

    switch (type) {
        case actionTypes.setIsLoading:
            return {
                ...state,
                isLoading: payload
            }
        case actionTypes.setStudentAndTotal:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}