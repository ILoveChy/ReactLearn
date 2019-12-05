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
import { Route, Switch, Redirect } from 'react-router-dom'
import loginInfo from '../loginInfo'

export default function Admin(props) {
    return (
        loginInfo.isLogin ? (
            <Layout
                header={<Header onLoginOut={() => {
                    loginInfo.loginOut()
                    props.history.push('/login')
                }} />}
                aside={<Menu />}
            >
                <Switch>
                    <Route path="/" exact component={Welcome} />
                    <Route path="/students" exact component={StudentList} />
                    <Route path="/students/add" exact component={StudentAdd} />
                    <Route path="/students/:sNo" exact component={StudentDetail} />
                    <Route path="/course" exact component={CourseList} />
                    <Route path="/course/add" exact component={CourseAdd} />
                    {/* <Redirect to="/students" /> */}
                </Switch>
            </Layout>
        ) : <Redirect to={{
            pathname: '/login',
            state: props.location.pathname
        }} />

    )
}
