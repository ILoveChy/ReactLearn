import React, { useEffect, useRef, useState } from 'react'
export default function App() {

  const [num, setNum] = useState(10);
  const numRef = useRef(num);
  useEffect(() => {
    const timer = setInterval(() => {
      numRef.current--;
      setNum(numRef.current)
      if (numRef.current === 0) {
        clearInterval(timer)
      }
    }, 1000);
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (
    <div>
      <h1>{num}</h1>
    </div>
  )
}
