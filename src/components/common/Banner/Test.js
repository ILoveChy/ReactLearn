import React, { Component } from 'react'
import Banner from './index'
export default class Test extends Component {
    state = {
        imgSrcs: [
            "https://img.alicdn.com/simba/img/TB1ryCmj.T1gK0jSZFrSuwNCXXa.jpg",
            "https://img.alicdn.com/simba/img/TB1VfvXjebviK0jSZFNSuuApXXa.jpg",
            "https://img.alicdn.com/tfs/TB11AMajVY7gK0jSZKzXXaikpXa-520-280.jpg_q90_.webp",
            "https://img.alicdn.com/simba/img/TB1kzbXjrj1gK0jSZFuSuwrHpXa.jpg",
            "https://img.alicdn.com/tfs/TB1ZbJ4j7L0gK0jSZFxXXXWHVXa-520-280.jpg_q90_.webp"]
    }
    render() {
        return (
            <div>
                <Banner imgSrcs={this.state.imgSrcs} />
            </div>
        )
    }
}
