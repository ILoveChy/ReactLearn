import React, { useImperativeHandle, useRef } from 'react'

function Test(props, ref) {
  useImperativeHandle(ref, () => {
    //如果不给依赖项,则每次运行函数组件都会调用该方法
    //如果使用了依赖项,则第一次调用后会进行缓存,只有依赖项发生变化时才会重新调用函数
    return {
      method() {
        console.log("Test method called");
      }
    }
  }, [])
  return (
    <div>
      <h1>Test Component</h1>
    </div>
  )
}
const TestWrapper = React.forwardRef(Test)

export default function App() {
  const testRef = useRef()
  return (
    <div>
      <TestWrapper ref={testRef} />
      <button onClick={() => {
        testRef.current.method()
      }} >点击调用Test组件的method方法</button>
    </div>
  )
}
