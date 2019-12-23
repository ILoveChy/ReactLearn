

import React from 'react'
import Counter from './Counter'
import { Route, Switch, NavLink, routerRedux } from 'dva/router'
//router-redux:里面包含了所以connected-react-router的东西

function Home() {
    return (
        <h1>Home组件</h1>
    )
}


export default function ({ history }) {
    return (
        <routerRedux.ConnectedRouter history={history}>
            <div>
                <ul>
                    <li>
                        <NavLink to="/home">首页</NavLink>
                    </li>
                    <li>
                        <NavLink to="/counter">计数器</NavLink>
                    </li>
                </ul>
                <div>
                    <Switch>
                        <Route path="/counter" component={Counter} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </div>
        </routerRedux.ConnectedRouter>
    )
}
