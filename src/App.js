import React, { Component } from 'react'
// import Modal from './components/common/Modal/index'
// import ThreeLayout from './components/common/ThreeLayout/index'
// import Test from './components/common/CheckBoxGroup/Test'
// import Test from './components/common/RadioBoxGroup/Test'
// import Test from './components/common/Select/Test'
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
        {/* <img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=3483030207,3924941481&fm=202&mola=new&crop=v1" alt="" />
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


                <button onClick={this.showModal} >显示蒙层</button> */}
        {/* <ThreeLayout
                    left={
                        <div style={{
                            border: "2px solid #f60"
                        }}>左边栏</div>
                    }
                    right={
                        <div style={{
                            border: "2px solid #f10"
                        }}>右边栏</div>
                    }
                >
                    <div style={{
                        border: "2px solid #f40"
                    }}>
                        <h1>主区域</h1>
                        <p>sadasdasduih uah uhaiuhd uha iuhiu hwiquh hiquh i</p>
                    </div>
                </ThreeLayout> */}
        {/* <Test /> */}
      </>
    )
  }
}
