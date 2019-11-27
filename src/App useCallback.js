import React, { PureComponent, useState, useCallback } from 'react'



class Test extends PureComponent {
  render() {
    console.log('Test Render');

    return (
      <div>
        <h1>{this.props.text}</h1>
        <button onClick={this.props.onClick}>改变文本</button>
      </div>
    )
  }
}
function Parent() {
  console.log('Parent Render');

  const [text, setText] = useState(1);
  const [number, setNumber] = useState(0);
  const handleClick = useCallback(() => {
    setText(text => text + 1)
  }, [text])
  return (
    <div>
      {/* 函数的地址每次渲染都发生了变化,导致了子组件跟着重新渲染,若子组件是经过优化的组件,则可能导致优化失效 */}
      <input value={number} onChange={e => setNumber(parseInt(e.target.value))} type="number" />
      <Test text={text} onClick={handleClick} />
      {/* ()=>{} 每次渲染时候Parent的地址都发生了变化  */}
    </div>
  )
}

export default function App() {
  return (
    <div>
      <Parent />
    </div>
  )
}
