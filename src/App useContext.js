import React, { useContext } from 'react'


const ctx1 = React.createContext();
// function Test() {
//   return (
//     <ctx.Consumer>
//       {value => <h1>Test,上下文的值:{value}</h1>}
//     </ctx.Consumer>
//   )
// }
function Test() {
  const data = useContext(ctx1)
  return <h1>{data.name}{data.age}</h1>
}
export default function App() {

  return (
    <div>
      <ctx1.Provider value={{
        name: "梁帅",
        age: 27
      }}>
        <Test />
      </ctx1.Provider>
    </div>
  )
}

