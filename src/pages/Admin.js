import React from 'react'
import Layout from '../components/Layout/index'
import Header from '../components/Header/index'
import Menu from '../components/Menu/index'
import Welcome from './Welcome'
import StudentList from './students/StudentList'
import StudentAdd from './students/StudentAdd'
import StudentDetail from './students/StudentDetail'
import CourseList from './course/CourseList'
import CourseAdd from './course/CourseAdd'
import { Route, Switch } from 'react-router-dom'

export default function Admin() {
    return (
        <Layout
            header={<Header />}
            aside={<Menu />}
        >
            <Switch>
                <Route path="/" exact component={Welcome} />
                <Route path="/students" exact component={StudentList} />
                <Route path="/students/add" exact component={StudentAdd} />
                <Route path="/students/:sNo" exact component={StudentDetail} />
                <Route path="/course" exact component={CourseList} />
                <Route path="/course/add" exact component={CourseAdd} />
            </Switch>



        </Layout>
    )
}
