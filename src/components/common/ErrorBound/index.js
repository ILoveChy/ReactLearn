import React, { PureComponent } from 'react'

export default class ErrorBound extends PureComponent {
    state = {
        hasError: false
    }
    /**
     * 用于改变状态 更新页面之前运行 效率高
     * @param {*} error 
     */
    static getDerivedStateFromError(error) {
        console.log('发生了错误');
        return {
            hasError: true
        }
    }
    /**
     * 更新页面之后运行 先卸载再重新加载
     * 用于记录错误消息
     * @param {*} error 
     * @param {*} info 
     */
    componentDidCatch(error, info) {
        console.log('记录错误信息');

        this.setState({
            hasError: true
        })
    }
    render() {
        if (this.state.hasError) {
            return <h1>出现错误了</h1>
        }
        return this.props.children
    }
}
