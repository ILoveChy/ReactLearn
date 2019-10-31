import React, { Component } from 'react'
import CheckBoxGroup from './index'
import { getAllStudents } from '../../../services/student'
export default class Test extends Component {
    state = {
        datas: [],
        chooseDatas: []
    }

    async componentDidMount() {
        const stus = await getAllStudents();
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
