import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Contacts from './Contacts/Contacts'
import Container from './Tabs/Container'
import store from './Redux/Store'
import { fetchContacts } from './Redux/Actions/contacts'

import './App.css'

function App () {
  store.dispatch(fetchContacts())
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
