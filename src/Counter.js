import React, { useRef } from 'react'
import { connect } from "dva"

function Counter(props) {
    const inp = useRef();
    return (
        <div>
            <h1>{props.number}</h1>
            <button onClick={props.onAsyncDecrease}>异步减</button>
            <button onClick={props.onDecrease}>-</button>
            <button onClick={props.onIncrease}>+</button>
            <button onClick={props.onAsyncIncrease}>异步+</button>
            <p>
                <input type="number" ref={inp} />
                <button onClick={() => {
                    const n = parseInt(inp.current.value)
                    props.onAdd(n);
                }}>加上</button>
            </p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    number: state.counter
})
const mapDispatchToProps = dispatch => ({

    onAsyncDecrease: () => {
        dispatch({
            type: "counter/asyncDecrease"
        })
    },
    onDecrease: () => {
        dispatch({
            type: "counter/decrease"
        })
    },
    onIncrease: () => {
        dispatch({
            type: "counter/increase"
        })
    },
    onAsyncIncrease: () => {
        dispatch({
            type: "counter/asyncIncrease"
        })
    },
    onAdd: n => {
        dispatch({
            type: "counter/add",
            payload: n
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)