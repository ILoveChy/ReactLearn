import * as numberAction from '../action/numberAction'

const initialState = 10

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case numberAction.createIncreaseAction().type:
            return state + 1
        case numberAction.createDecreaseAction().type:
            return state - 1;
        case numberAction.createSetAction().type:
            return payload;
        default:
            return state;
    }
}
