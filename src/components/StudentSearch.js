import React, { Component } from 'react'
import { connect } from 'react-redux'
import StudentSearchBar from './StudentSearchBar'
import { change as changeCondition } from '../store/action/student/searchCondition'
import { fetchStudents } from '../store/action/student/searchResult'
import StudentTable from './StudentTable'
import Pager from './common/Pager'
import store from '../store'

//连接StudentSearchBar
let mapStateToProps = state => ({
    defaultValue: {
        key: state.students.searchCondition.key,
        sex: state.students.searchCondition.sex,
    }
})
let mapDispatchToProps = dispatch => ({
    onSearch: (newCondition) => {
        newCondition.page = 1;//条件中页码回归到1
        //重新设置条件
        dispatch(changeCondition(newCondition))
        //触发获取学生数据的action
        dispatch(fetchStudents());
    }
})
//连接数据和处理函数后,得到一个新的组件
const SearchBar = connect(mapStateToProps, mapDispatchToProps)(StudentSearchBar)

//连接 StudentTable
mapStateToProps = state => ({
    stus: state.students.searchResult.datas
})

const Table = connect(mapStateToProps)(StudentTable)

//连接 Pager
mapStateToProps = state => ({
    current: state.students.searchCondition.page,
    total: state.students.searchResult.total,
    limit: state.students.searchCondition.limit,
    panelNumber: 5
})
mapDispatchToProps = dispatch => ({
    onPageChange: (newPage) => {
        //重新设置条件
        dispatch(changeCondition({
            page: newPage
        }))
        //触发获取学生数据的action
        dispatch(fetchStudents());
    }
})

const PagerTemp = connect(mapStateToProps, mapDispatchToProps)(Pager)



export default class StudentSearch extends Component {
    componentDidMount() {
        store.dispatch(fetchStudents())
    }
    render() {
        return (
            <>
                <SearchBar />
                <Table />
                <PagerTemp />
            </>
        )
    }
}
