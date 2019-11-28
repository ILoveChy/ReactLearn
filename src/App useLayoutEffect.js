import React, { useState, useLayoutEffect, useRef } from 'react'



export default function App() {
  const [num, setNum] = useState(0);
  const hRef = useRef()
  useLayoutEffect(() => {
    hRef.current.innerText = Math.random().toFixed(2)
  });
  return (
    <div>
      <h1 ref={hRef}>{num}</h1>
      <button onClick={() => { setNum(num => num + 1) }}>+</button>
    </div>
  )
}
