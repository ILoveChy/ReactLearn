import React from 'react'
import './index.css'
/**
 * 
 * @param {*} props 存在默认背景bg 隐藏显示样式自行控制 函数名onClose为关闭
 */
export default function Modal(props) {

    let defaultProps = {//默认属性
        bg: "rgba(0,0,0,.5)"
    };
    let datas = Object.assign({}, defaultProps, props)
    return (
        <div onClick={e => {
            if (e.target.className === "modal") {
                datas.onClose()
            }
        }} className="modal" style={{ background: datas.bg }}>
            <div className="modal-center">
                {datas.children}
            </div>
        </div>
    )
}
