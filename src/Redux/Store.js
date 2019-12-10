import { createStore } from 'redux'

const placeholder = (state) => state

const store = createStore(
  placeholder,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
