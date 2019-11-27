import React, { useReducer } from 'react'
// import React from 'react'
// import useReducer from './useReducer'  手写useReducer 

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      if (state === 0) {
        return 0
      }
      return state - 1;
    default:
      return state
  }
}

export default function App() {
  const [num, dispath] = useReducer(reducer, 10, (args) => {
    console.log(args);
    return 100
  })
  return (
    <div>
      <button onClick={() => {
        dispath({ type: "decrease" })
      }}>-</button>
      <span>{num}</span>
      <button onClick={() => {
        dispath({ type: "increase" })
      }}>+</button>
    </div>
  )
}

