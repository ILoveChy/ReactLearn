import React from 'react'
export default function StudentAdd(props) {

    return (
        <div>
            <h1>添加学生页</h1>
            <p>姓名:{props.match.params.name}</p>
            <p>年龄:{props.match.params.age}</p>
            <p>性别:{props.match.params.sex}</p>
            <button onClick={() => {
                props.history.replace('/students')
            }}>跳转到添加学生</button>
        </div>
    )
}
