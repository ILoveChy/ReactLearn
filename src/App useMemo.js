import React, { useState, useMemo } from 'react'

function Item(props) {
  console.log(`Item Render ${props.value}`);
  return <li>{props.value}</li>
}

export default function App() {
  const [range,] = useState({ min: 1, max: 1000 });
  const [num, setNum] = useState(0);
  const list = useMemo(() => {
    const list = [];
    for (let i = range.min; i <= range.max; i++) {
      list.push(<Item key={i} value={i}></Item>)
    }
    return list
  }, [range])

  return (
    <div>
      <ul>
        {list}
      </ul>
      <input type="number"
        value={num}
        onChange={e => { setNum(parseInt(e.target.value)) }}
      />
    </div>
  )
}
