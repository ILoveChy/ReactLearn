import React from 'react'

export default function StudentList(props) {
    return (
        <div>
            <h1>学生列表页</h1>
            <button onClick={() => {
                props.history.push('/students/add')
            }}>跳转到添加学生</button>
        </div>
    )
}
