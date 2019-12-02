import React from 'react'
import Layout from '../components/Layout/index'
import Header from '../components/Header/index'
import Menu from '../components/Menu/index'
import Welcome from './Welcome'
import StudentList from './students/StudentList'
import StudentAdd from './students/StudentAdd'
import { Route } from 'react-router-dom'

export default function Admin() {
    return (
        <Layout
            header={<Header />}
            aside={<Menu />}
        >
            <Route path="/" exact component={Welcome} />
            <Route path="/students" exact component={StudentList} />
            <Route path="/students/add" exact component={StudentAdd} />
        </Layout>
    )
}
