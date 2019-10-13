import React, { Component } from 'react'
import Pager from './Pager'

export default class PagerTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 1,
            total: 0,
            limit: 10,
            panelNumber: 5
        }
        fetch('/api/')
    }
    handelPageChange = (newPage) => {
        this.setState({
            current: newPage
        })
    }
    render() {
        return (
            <div>
                <Pager {...this.state} onPageChange={this.handelPageChange} />
            </div>
        )
    }
}
