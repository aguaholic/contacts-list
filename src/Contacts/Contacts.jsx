import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Contacts = () => {
  const params = useParams()

  const contacts = useSelector((contacts) => {
    return contacts.filter((contact) => {
      return contact.name.last[0] === params.letter
    })
  }).map((contact, i) => (
    <li key={i}>
      {contact.name.first} {contact.name.last}
    </li>
  ))

  return (
    <div>
      <ul>
        {contacts}
      </ul>
    </div>
  )
}

export default Contacts
