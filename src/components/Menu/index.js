import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'

export default function Menu() {
    return (
        <ul className="menu">
            <li>
                <NavLink exact to="/students">学生管理</NavLink>
            </li>
            <li>
                <NavLink exact to="/students/add">添加学生</NavLink>
            </li>
            <li>
                <NavLink exact to="/course">课程列表</NavLink>
            </li>
            <li>
                <NavLink exact to="/course/add">添加课程</NavLink>
            </li>
        </ul>
    )
}
