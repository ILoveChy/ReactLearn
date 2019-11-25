import React, { useState } from 'react'

export default function App() {
  console.log('重新渲染');

  const [number, setNumber] = useState(0);//使用一个状态 该状态的默认值是0
  const [look, setLook] = useState(true);
  const [, forceUpdate] = useState({});
  return (
    <div>
      <button onClick={() => {
        forceUpdate({})
      }}>
        强制刷新
      </button>
      <p style={{ display: look ? "block" : "none" }}>
        <button onClick={() => setNumber(number - 1)}>-</button>
        <span>{number}</span>
        <button onClick={() => setNumber(number => number + 1)}>+</button>
      </p>
      <button onClick={() => { setLook(!look) }}>显示/隐藏</button>
    </div>
  )
}
