import * as userAction from '../action/userAction'

const initialState = {
    isLoading: false,//是否正在加载
    datas: [] //用户数组
};

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case userAction.ADDUSER:
            return {
                ...state,
                datas: [...state.datas, payload]
            }
        case userAction.DELETEUSER:
            return {
                ...state,
                datas: state.datas.filter(it => it.id !== payload)
            }
        case userAction.UPDATEUSER:
            return {
                ...state,
                datas: state.datas.map(it => it.id === { payload } ? { ...it, ...payload } : it)
            }
        case userAction.SETUSERS:
            return {
                ...state,
                datas: payload
            }
        case userAction.createSetLoadingAction:
            return {
                ...state,
                isLoading: payload
            }
        default:
            return state
    }
}
