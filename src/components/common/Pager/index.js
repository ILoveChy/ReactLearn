import React from 'react'
import './index.css'
import PropTypes from 'prop-types'


Pager.defaultProps = {
    current: 1,
    limit: 10,
    panelNumber: 5
}
Pager.propTypes = {
    current: PropTypes.number,
    total: PropTypes.number.isRequired,
    limit: PropTypes.number,
    panelNumber: PropTypes.number
}


/**
 * 分页组件
 * 属性:
 * 1. current:初始页码
 * 2. total:总数据量
 * 3. limit:每页显示数据量
 * 4. panelNumber:数字页码最多显示多少个
 * 5. onPageChange:页码改变时的事件
 */
export default function Pager(props) {
    const pageNumber = getPageNumber(props);//总页数
    if (pageNumber === 0) {
        return null;
    }
    const min = getMinNumber(props);//最小数字
    const max = getMaxNumber(min, pageNumber, props);//最大数字
    const numbers = [];
    // if (max - min + 1 < props.panelNumber) {//怎么让页码始终保持5页且保持页码正常?
    //     min = max - props.panelNumber + 1
    // }
    for (let i = min; i <= max; i++) {
        numbers.push(
            <span key={i} onClick={() => { toPage(i, props) }} className={i === props.current ? "item active" : "item"}>{i}</span>
        )
    }
    return (
        <>
            <span onClick={() => { toPage(1, props) }} className={props.current === 1 ? "item disabled" : "item"}>首页</span>
            <span onClick={() => { toPage(props.current - 1 < 1 ? 1 : props.current - 1, props) }} className={props.current === 1 ? "item disabled" : "item"}>上一页</span>
            {/* 数字页码 */}
            {numbers}
            <span onClick={() => { toPage(props.current + 1 > pageNumber ? pageNumber : props.current + 1, props) }} className={props.current === pageNumber ? "item disabled" : "item"}>下一页</span>
            <span onClick={() => { toPage(pageNumber, props) }} className={props.current === pageNumber ? "item disabled" : "item"}>尾页</span>
            <span className="current">{props.current}</span>/<span>{pageNumber}</span>
        </>
    )
}

/**
 * 计算最小数字
 * @param {*} props 
 */
function getMinNumber(props) {
    let min = props.current - Math.floor(props.panelNumber / 2)
    if (min < 1) {
        min = 1
    }
    return min
}
/**
 * 
 * @param {*} min 最小数字
 * @param {*} pageNumber 总页数
 * @param {*} props 
 */
function getMaxNumber(min, pageNumber, props) {
    var max = min + props.panelNumber - 1;
    if (max > pageNumber) {
        max = pageNumber;
    }
    return max;
}

/**
 * 跳转到指定页码
 * @param {*} traget 目标页码
 * @param {*} props 所以属性
 */
function toPage(traget, props) {
    if (props.current === traget) {
        return
    }
    props.onPageChange && props.onPageChange(traget);

}

/**
 * 计算总页数 Math.ceil 向上取整(总量/每页量)
 * @param {*} props 
 */
function getPageNumber(props) {
    return Math.ceil(props.total / props.limit)
}
