import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'
import ImgContainer from './ImgContainer/index'

export default class Banner extends Component {
    static defaultProps = {
        width: 520,
        height: 280,
        imgSrcs: [],
        autoDuration: 3000,
        duration: 500
    }
    static propTypes = {
        width: PropTypes.number.isRequired,//容器宽度1
        height: PropTypes.number.isRequired,//容器高度
        imgSrcs: PropTypes.arrayOf(PropTypes.string),//图片路径数组
        autoDuration: PropTypes.number.isRequired,//自动切换的间隔时间
        duration: PropTypes.number.isRequired,//完成一次切换需要的书剑
    }
    imgContainerRef = el => {
        this.imgCoImgContainer = el
    }
    /**
     * 切换到第几张图片
     */
    handleSwitch = index => {
        //得到ImgContainer的组件对象
        console.log(this.imgCoImgContainer);

        this.imgCoImgContainer.switchTo(index)
    }
    render() {
        return (
            <div className="banner-container" style={{
                width: this.props.width,
                height: this.props.height
            }}>
                <ImgContainer
                    ref={this.imgContainerRef}
                    imgSrcs={this.props.imgSrcs}
                    imgHeight={this.props.height}
                    imgWidth={this.props.width}
                />
                <button onClick={() => {
                    this.handleSwitch(3)
                }}>到第三张</button>
            </div>
        )
    }
}
