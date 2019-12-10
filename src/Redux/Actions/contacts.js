import Axios from 'axios'

export function fetchContacts () {
  return (dispatch) => {
    Axios.get('https://randomuser.me/api/?results=1000')
      .then((response) => {
        dispatch({ type: 'FETCHED_CONTACTS', contacts: response.data.results })
      })
  }
}
