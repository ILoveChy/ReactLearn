import React, { Component } from 'react'
import CheckBoxGroup from './index'
export default class Test extends Component {
    state = {
        datas: [],
        chooseDatas: []
    }
    render() {
        return (
            <div>
                <CheckBoxGroup name="loves"
                    {...this.state}
                    onChange={newArr => {
                        this.setState({
                            chooseDatas: newArr
                        })
                    }}
                />
            </div>
        )
    }
}
