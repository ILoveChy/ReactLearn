import React, { Component } from 'react'
import PropTypes from 'prop-types'



export default class ImgContainer extends Component {

    static defaultProps = {
        imgWidth: 520,
        imgHeight: 280,
        imgSrcs: [],
    }

    static propTypes = {
        imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,//图片路径数组
        imgWidth: PropTypes.number.isRequired,//单张图片宽度
        imgHeight: PropTypes.number.isRequired,//单张图片高度
        duration: PropTypes.number.isRequired,//动画时间
    }

    containerRef = el => {
        this.div = el;
    }
    /**
     * 切换到第几张
     * 调用该函数,此组件会经过一段动画完成切换
     * @param {*} index
     */

    tick = 16 //计时器的间隔时间
    timer = null; //计时器序号
    switchTo(index) {
        if (index < 0) {
            index = 0
        }
        else if (index > this.props.imgSrcs.length - 1) {
            index = this.props.imgSrcs.length - 1
        }
        // 根据index计算最终的marginleft
        const targetLeft = -index * this.props.imgWidth;
        // this.div.style.marginLeft = targetLeft + 'px';
        // 得到当前的marginLeft
        let curLeft = parseFloat(getComputedStyle(this.div).marginLeft);
        //计算执行次数
        const times = Math.ceil(this.props.duration / this.tick);
        //当前运动的次数
        let curTime = 0;
        //计算每次运动的距离
        const totalDistance = targetLeft - curLeft //总距离
        const distance = totalDistance / times; //每次运动的距离
        //先停止之前的动画
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            curTime++;
            curLeft += distance;
            this.div.style.marginLeft = curLeft + 'px'
            if (curTime === times) {
                //停止运动
                this.div.style.marginLeft = targetLeft + 'px'
                clearInterval(this.timer)
            }
        }, this.tick);
    }
    render() {
        const imgs = this.props.imgSrcs.map((src, index) => <img key={index} alt="img" src={src} />)
        return (
            <div
                ref={this.containerRef}
                style={{
                    width: this.props.imgSrcs.length * this.props.imgWidth,
                    height: this.props.imgHeight
                }}>
                {imgs}
            </div>

        )
    }
}
