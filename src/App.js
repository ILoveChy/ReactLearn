import React, { Component } from 'react'
import Modal from './components/common/Modal/index'
import './App.css'

export default class App extends Component {
    state = {
        showModal: false
    }
    showModal = () => {
        this.setState({
            showModal: true
        })
    }
    hideModal = () => {
        this.setState({
            showModal: false
        })
    }
    render() {
        return (
            <>
                <img src="https://sta-op.douyucdn.cn/butterfly-java/2019/09/29/eaf922cf0497f5a79d2cb449426e1436.jpg" alt="" />
                {
                    this.state.showModal ?
                        (
                            <Modal onClose={this.hideModal}>
                                <div style={{
                                    background: "#fff"
                                }}>
                                    <h1>加载中</h1>
                                    <button onClick={this.hideModal}>关闭蒙层</button>
                                </div>
                            </Modal>
                        ) : null
                }


                <button onClick={this.showModal} >显示蒙层</button>
            </>
        )
    }
}
