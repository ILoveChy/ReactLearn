import React from 'react'
import './index.css'
import types from '../../../utils/commonTypes'
import PropTypes from 'prop-types'


ThreeLatout.defaultProps = {
    leftWidth: 200,
    rightWidth: 200,
    minWidth: 800
}
ThreeLatout.propTypes = {
    leftWidth: PropTypes.number,
    rightWidth: PropTypes.number,
    rightWidth: PropTypes.number,
    children: types.children,
    left: types.children,
    right: types.children,
}



export default function ThreeLatout(props) {
    return (
        <div className="three-layout" style={{
            minWidth: props.minWidth
        }}>
            <div className="main">
                {props.children}
            </div>
            <div className="aside-left" style={{
                width: props.leftWidth
            }}>
                {props.left}
            </div>
            <div className="aside-right" style={{
                width: props.rightWidth
            }}>
                {props.right}
            </div>
        </div>
    )
}
