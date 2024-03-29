import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Modal from '../Modal/Modal'
import Card from '../Contacts/Card/Card'
import Backdrop from '../Backdrop/Backdrop'

import classes from './Contacts.module.css'

const Contacts = () => {
  const params = useParams()

  const [selectedContact, setSelectedContact] = useState(null)

  const handleSelectContact = (contact) => {
    if (!selectedContact) {
      setSelectedContact(contact)
    }
  }

  const handleClose = () => {
    setSelectedContact(null)
  }

  const contacts = useSelector((contacts) => {
    return contacts.filter((contact) => {
      return contact.name.last[0] === params.letter
    })
  }).map((contact, i) => {
    return (
      <li
        key={i}
        className={classes.List}
        onClick={() => handleSelectContact(contact)}>
        {contact.name.first} {contact.name.last.toUpperCase()}
      </li>
    )
  })

  return (
    <div className={classes.Column}>
      {selectedContact
        ? (
          <div>
            <Backdrop />
            <Modal>
              <Card contact={selectedContact} onClose={handleClose} />
            </Modal>
          </div>
        )
        : null}
      <ul>
        {contacts}
      </ul>
    </div>
  )
}

export default Contacts
