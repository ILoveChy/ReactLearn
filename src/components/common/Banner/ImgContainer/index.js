import React, { Component } from 'react'
import PropTypes from 'prop-types'



export default class ImgContainer extends Component {
    state={
        marginLeft:0
    }
    static defaultProps = {
        imgWidth: 520,
        imgHeight: 280,
        imgSrcs: [],
    }

    static propTypes = {
        imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,//图片路径数组
        imgWidth: PropTypes.number.isRequired,//单张图片宽度
        imgHeight: PropTypes.number.isRequired,//单张图片高度
    }
    
    containerRef=el=>{
        this.div=el;
    }
    /**
     * 切换到第几张
     * 调用该函数,此组件会经过一段动画完成切换
     * @param {*} index
     */
    switchTo(index){
        if (index<0) {
            index=0
        }
        else if (index>this.props.imgSrcs.length-1){
            index=this.props.imgSrcs.length-1
        }


        console.log(this.div,index);
    }
    render() {
        const imgs=this.props.imgSrcs.map((src,index)=><img key={index} alt="img" src={src} style={{
            marginLeft:this.state.marginLeft
        }} />)
        return (
           <div 
           ref={this.containerRef}
                style={{
                width:this.props.imgSrcs.length*this.props.imgWidth,
                height:this.props.imgHeight
                }}>
                {imgs}
           </div>
               
        )
    }
}
