import * as userAction from '../action/userAction'
import uuid from 'uuid'

const initialState = [
    { id: uuid(), name: '用户1', age: 11 },
    { id: uuid(), name: '用户2', age: 12 },
    { id: uuid(), name: '用户3', age: 13 }
]

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case userAction.ADDUSER:
            return [...state, payload]
        case userAction.DELETEUSER:
            return state.filter(it => it.id !== payload)
        case userAction.UPDATEUSER:
            return state.map(it => it.id === { payload } ? { ...it, ...payload } : it)
        default:
            return state
    }
}
