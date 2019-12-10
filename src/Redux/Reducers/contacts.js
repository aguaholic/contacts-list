export function contacts (state, action) {
  switch (action.type) {
    case 'FETCHED_CONTACTS':
      return action.contacts
    default:
      return state
  }
}
