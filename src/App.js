import React from 'react'
// import { Provider } from 'react-redux'
import Counter from './components/Counter'
import store from './store/index'

export default function App() {
  return (
    // <Provider store={store}>
    //   <Counter />
    // </Provider>
    <div>
      <Counter />
    </div>
  )
}

