import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Contacts from './Contacts/Contacts'
import { Tabs } from './Tabs'
import store from './Redux/Store'
import { fetchContacts } from './Redux/Actions/contacts'

import './App.css'

function App () {
  store.dispatch(fetchContacts())
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Route path='/:letter?'>
            <Tabs />
            <Contacts />
          </Route>
        </div>
      </Router>
    </Provider>
  )
}

export default App
