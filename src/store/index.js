import { createStore, applyMiddleware } from "redux"
import reducer from './reducer/index'
import looger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
// import thunk from 'redux-thunk'

const sagaMid = createSagaMiddleware();



const store = createStore(reducer,
    applyMiddleware(
        // thunk,
        sagaMid,
        looger
    )
)
sagaMid.run(rootSaga);

export default store
