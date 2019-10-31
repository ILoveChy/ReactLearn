import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'
import ImgContainer from './ImgContainer/index'
import SwitchArrow from './SwitchArrow/index'
import SwtichDot from './SwtichDot/index'
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
    state = {
        curIndex: 0
    }
    timer = null;//自动切换的计时器

    autoSwtich = () => {
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            let cur = this.state.curIndex;
            cur = (cur + 1) % this.props.imgSrcs.length;
            this.handleSwitch(cur)
        }, this.props.autoDuration);
    }

    componentDidMount() {
        this.autoSwtich();
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    imgContainerRef = el => {
        this.imgCoImgContainer = el
    }
    /**
     * 切换到第几张图片
     */
    handleSwitch = index => {
        this.setState({
            curIndex: index
        })
        //得到ImgContainer的组件对象
        this.imgCoImgContainer.switchTo(index)
    }
    handleArrowChange = type => {
        let cur = this.state.curIndex;
        if (type === "left") {
            cur--;
            if (cur < 0) {
                cur = this.props.imgSrcs.length - 1
            }
        }
        if (type === "right") {
            cur++;
            if (cur > this.props.imgSrcs.length - 1) {
                cur = 0;
            }
        }
        this.handleSwitch(cur)
    }
    render() {
        return (
            <div className="banner-container" style={{
                width: this.props.width,
                height: this.props.height
            }} onMouseEnter={() => { clearInterval(this.timer) }}
                onMouseLeave={() => { this.autoSwtich() }}>
                <SwitchArrow onChange={this.handleArrowChange} />
                <ImgContainer
                    ref={this.imgContainerRef}
                    imgSrcs={this.props.imgSrcs}
                    imgHeight={this.props.height}
                    imgWidth={this.props.width}
                    duration={this.props.duration}
                />
                <SwtichDot onChange={this.handleSwitch} total={this.props.imgSrcs.length} curIndex={this.state.curIndex} />
            </div>
        )
    }
}
