import React from 'react'
import { Provider } from 'react-redux'
import StudentSearch from './components/StudentSearch'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <StudentSearch />
    </Provider>
  )
}

