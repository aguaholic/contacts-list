import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Contacts from './Contacts/Contacts'
import Container from './Tabs/Container'
import store from './Redux/Store'

import './App.css'

function App () {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Container />
          <Route path='/:letter'>
            <Contacts />
          </Route>
        </div>
      </Router>
    </Provider>
  )
}

export default App
