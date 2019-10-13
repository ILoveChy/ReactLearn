import React, { Component } from 'react'
import Pager from './Pager'
import StudentList from './StudentList'
import Modal from './Modal'

export default class PagerTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 1,
            total: 0,
            limit: 10,
            panelNumber: 5,
            students: [],
            isLoading: false
        }
        this.fetchStudents();

    }
    async fetchStudents() {
        this.setState({
            isLoading: true
        })
        const res = await fetch(`http://open.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.current}&size=${this.state.limit}`)
            .then(res => res.json())
            .then(res => res.data)
        this.setState({
            total: res.cont,
            students: res.findByPage,
            isLoading: false
        })
    }
    handelPageChange = (newPage) => {
        this.setState({
            current: newPage
        })
        this.fetchStudents();
    }
    render() {
        return (
            <div className="container">
                <StudentList stus={this.state.students} />
                <div>
                    <Pager {...this.state} onPageChange={this.handelPageChange} />
                </div>
                <Modal show={this.state.isLoading} />
            </div>

        )
    }
}
