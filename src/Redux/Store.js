import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { contacts } from './Reducers/contacts'

const enhance = applyMiddleware(
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  thunk
)

const store = createStore(
  contacts,
  enhance
)

export default store
