import React from 'react'
import './index.css'
export default function Header(props) {
    return (
        <>
            <div className="header-left">
                <h1>学生管理系统</h1>
            </div>
            <div className="header-right">
                <span>用户名:{'sss'}</span>
                <button onClick={props.onLoginOut ? props.onLoginOut : null}>退出</button>
            </div>
        </>

    )
}
