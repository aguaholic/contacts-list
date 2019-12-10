import React from 'react'
import { useParams } from 'react-router-dom'

const contacts = [
  { name: 'Stefan', email: 'osihsohi@oshis.com', id: 0 },
  { name: 'Joyce', email: 'osihsohi@oshis.com', id: 1 },
  { name: 'SexyTete', email: 'osihsohi@oshis.com', id: 2 },
  { name: 'Jackie', email: 'osihsohi@oshis.com', id: 3 },
  { name: 'Jamie', email: 'osihsohi@oshis.com', id: 4 },
  { name: 'Stefanus', email: 'osihsohi@oshis.com', id: 5 }
]

const Contacts = () => {
  const params = useParams()

  const filteredContacts = contacts.filter(item => {
    return (
      item.name[0] === params.letter
    )
  })
    .map((item, i) => {
      return (
        <li key={i}>{item.name} {item.email}</li>
      )
    })

  return (
    <div>
      <ul>
        {filteredContacts}
      </ul>
    </div>
  )
}

export default Contacts
