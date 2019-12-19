import { createStore, applyMiddleware } from "redux"
import reducer from './reducer/index'
import looger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(reducer,
    applyMiddleware(
        thunk,
        looger
    )
)

export default store
