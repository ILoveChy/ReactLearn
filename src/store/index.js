import { createStore, applyMiddleware } from "redux"
import reducer from './reducer'
import looger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './saga'

const sagaMid = createSagaMiddleware();



const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(
            sagaMid,
            looger
        )
    )
)
sagaMid.run(rootSaga);

export default store
