import React from 'react'
// import { connect } from 'react-redux'
import { asyncDecrease, asyncIncrease, increase, decrease } from '../store/action/counter'
import store from '../store'
//展示组件
export function Counter(props) {
    return (
        <div>
            <h1>{props.number}</h1>
            <p>
                <button onClick={props.onAsyncDecrease}>异步减</button>
                <button onClick={props.onDecrease}>减</button>
                <button onClick={props.onIncrease}>加</button>
                <button onClick={props.onAsyncIncrease}>异步加</button>
            </p>
        </div>
    )
}
/**
 * 将整个仓库的状态映射到当前需要的数据
 * @param {*} state 
 */
function mapStateToProps(state) {
    return {
        number: state.counter
    }
}
function mapDispatchProps(dispatch) {
    return {
        onAsyncDecrease: () => {
            dispatch(asyncDecrease())
        },
        onDecrease: () => {
            dispatch(decrease())
        },
        onIncrease: () => {
            dispatch(increase())
        },
        onAsyncIncrease: () => {
            dispatch(asyncIncrease())
        }
    }
}

// Counter组件的数据来自于仓库
// connect()

//容器组件

export default class CounterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = mapStateToProps(store.getState());
    }
    render() {
        const eventHandlers = mapDispatchProps(store.dispatch)
        return <Counter {...this.state}  {...eventHandlers} />
    }
}
