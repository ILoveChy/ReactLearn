import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//   /a
function A() {
  return <h1>组件A</h1>
}
//   /a/b
function B() {
  return <h1>组件B</h1>
}
//   
function C() {
  return <h1>
    找不到页面
    <Route path="/ab/c" component={D}>
      <p>一定看得到

      </p>
    </Route>
  </h1>
}
function D() {
  return <p>组件D</p>
}
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/a' exact component={A}>
          {() => {
            return (
              <>
                必定会看到的内容
            </>
            )
          }}

        </Route>
        <Route path='/a/b' exact component={B} />
        <Route path="/ab" component={C} />
      </Switch>

    </Router>
  )
}

