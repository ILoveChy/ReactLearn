import React, { Component } from 'react'

export default class ErrorTest extends Component {

    render() {
        const data = undefined;
        const its = data.map(it => <span>{it}</span>)
        return (
            <div>{its}</div>
        )
    }
}
