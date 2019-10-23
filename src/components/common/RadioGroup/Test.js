import React, { Component } from 'react'
import RadioGroup from './index'
import { getAllStudents } from '../../../services/student'

export default class Test extends Component {
    state = {
        datas: [],
        value: ""
    }

    async componentDidMount() {
        const stus = await getAllStudents()
        this.setState({
            datas: stus.map(item => ({
                value: item.id.toString(),
                text: item.name
            }))
        })
    }
    render() {
        return (
            <div>
                <RadioGroup name="loves"
                    {...this.state}
                    onChange={value => {
                        this.setState({
                            value
                        })
                    }}
                />
            </div>
        )
    }
}
