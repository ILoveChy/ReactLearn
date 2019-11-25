import React from 'react'
import PropTypes from 'prop-types'

/**
 * 学生列表组件,纯展示组件
 */
export default function StudentList({ stus }) {
    const list = stus.map(item => (
        <li key={item.id}>{item.name},{item.sex === 1 ? "男" : "女"}</li>
    ))
    return (
        <ul>
            {list}
        </ul>
    )
}
StudentList.defaultProps = {
    stus: []
}
StudentList.propTypes = {
    stus: PropTypes.array.isRequired
}
