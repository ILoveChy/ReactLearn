import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



function User({ match }) {
  console.log(match);

  return (
    <>
      <h1>User组件固定的区域</h1>
      {/* User组件变化的区域:根据地质的不同发生变化 */}
      <p>
        <Link to={`${match.url}/update`}>付款</Link>
        <br />
        <Link to={`${match.url}/pay`}>更新</Link>
      </p>
      <div style={{
        width: 500,
        height: 500,
        border: '2px solid',
        margin: '0 auto'
      }}>
        <Route path={`${match.url}/update`} exact component={UserUpdate} />
        <Route path={`${match.url}/pay`} exact component={UserPay} />
      </div>
    </>
  )
}
function UserUpdate() {
  return <h1>修改用户信息</h1>
}
function UserPay() {
  return <h1>用户充值</h1>
}
export default function App() {
  return (
    <Router>
      <Route path="/user" component={User} />
      {/* 其他组件 */}
    </Router>
  )
}

