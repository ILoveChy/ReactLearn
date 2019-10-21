import React from 'react'
import './index.css'
import types from '../../../utils/commonTypes'
import PropTypes from 'prop-types'


Modal.defaultProps = {
    bg: "rgba(0,0,0,.5)",
}
Modal.propTypes = {
    children: types.children,
    bg: PropTypes.string,
    onClose: PropTypes.func
}

/**
 * 
 * @param {*} props 存在默认背景bg 隐藏显示样式自行控制 函数名onClose为关闭
 */
export default function Modal(props) {
    return (
        <div onClick={e => {
            if (e.target.className === "modal") {
                props.onClose()
            }
        }} className="modal" style={{ background: props.bg }}>
            <div className="modal-center">
                {props.children}
            </div>
        </div>
    )
}
