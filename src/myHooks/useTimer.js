/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'

/** 
 * 组件首次渲染后启动一个Interval计时器
 * 组件卸载后清除该计时器
 */
export default (func, duration) => {
    useEffect(() => {
        const timer = setInterval(func, duration);
        return (() => {
            clearInterval(timer)
        })
    }, [])
}