import { createStore, applyMiddleware } from "redux"
import reducer from './reducer/index'
import looger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './saga'
// import thunk from 'redux-thunk'

const sagaMid = createSagaMiddleware();



const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(
            // thunk,
            sagaMid,
            looger
        )
    )
)
sagaMid.run(rootSaga);

export default store
