import { createStore, applyMiddleware } from "redux"
import reducer from './reducer'
import looger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from "connected-react-router";
import history from './history'


const sagaMid = createSagaMiddleware();

const routerMid = routerMiddleware(history)

const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(
            routerMid,
            sagaMid,
            looger
        )
    )
)
sagaMid.run(rootSaga);

export default store
