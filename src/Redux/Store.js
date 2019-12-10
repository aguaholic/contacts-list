import { createStore } from 'redux'

import { contacts } from './Reducers/contacts'

const store = createStore(
  contacts,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
