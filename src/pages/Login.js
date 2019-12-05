import React, { Component } from 'react'
import loginInfo from '../loginInfo'
export default class Login extends Component {

    render() {
        if (this.props.location.state) {

        }
        return (
            <div>
                <h1>登陆页面</h1>
                <p>测试页面,点击下方按钮登陆成功</p>
                <button onClick={() => {
                    loginInfo.login();
                    this.props.location.state ?
                        this.props.history.push(this.props.location.state) :
                        this.props.history.push('/')
                }}>登陆</button>
            </div>
        )
    }
}
