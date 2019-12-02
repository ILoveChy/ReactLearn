import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Admin from './pages/Admin'
import Login from './pages/Login'


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" component={Admin} />
      </Switch>
    </Router>
  )
}

