import React, { useState } from 'react'
// import useStudentsByPage from './myHooks/useStudentsByPage' 
import useTimer from './myHooks/useTimer'

// function Test() {
//   const [page, setPage] = useState(1);
//   const res = useStudentsByPage(page, 10);
//   if (res) {
//     const list = res.findByPage.map(item => <li key={item.id}>{item.name}</li>)
//     return (
//       <>
//         <h1>数据总数:{res.cont}</h1>
//         <ul>
//           {list}
//         </ul>
//         <input type="number" value={page} onChange={e => { setPage(parseInt(e.target.value)) }} />
//       </>
//     )
//   }
//   return null
// }

function Test() {
  useTimer(() => {
    console.log("测试")
  }, 1000);
  return (
    <h1>
      Test组件
    </h1>
  )
}



export default function App() {
  const [isLook, setIsLook] = useState(true);
  return (
    <div>
      {
        isLook && <Test />
      }
      <button onClick={() => { setIsLook(!isLook) }}>显示隐藏</button>
    </div>
  )
}

