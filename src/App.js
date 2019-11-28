import React, { useDebugValue, useState, useEffect } from 'react'

function useTest() {
  const [students,] = useState([]);
  useDebugValue("学生集合")
  return students
}
export default function App() {
  useState(0);
  useEffect(() => {
    console.log('effect');
  }, [])
  useTest()
  return (
    <div>

    </div>
  )
}
