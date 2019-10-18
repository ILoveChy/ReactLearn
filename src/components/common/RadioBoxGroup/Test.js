import React, { Component } from 'react'
import RadioBoxGroup from './index'
import { getAllStudents } from '../../../services/student'

export default class Test extends Component {
    state = {
        datas: [],
        value: ""
    }

    async componentDidMount() {
        const stus = await getAllStudents()
        console.log(stus);

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
                <RadioBoxGroup name="loves"
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
