import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Modal from '../Modal/Modal'
import Card from '../Contacts/Card/Card'

import classes from './Contacts.module.css'

const Contacts = () => {
  const params = useParams()

  const [show, showDetail] = useState(false)
  const [selectedPerson, selectContact] = useState(null)

  const showDetailHandler = (id) => {
    showDetail(true)
  }

  const selectContactHandler = (id) => {
    selectContact(id)
  }

  // const hideDetailHandler = () => {
  //   showDetail({
  //     show: false
  //   })
  // }

  const contacts = useSelector((contacts) => {
    return contacts.filter((contact) => {
      return contact.name.last[0] === params.letter
    })
  }).map((contact, i) => {
    // console.log(contact.login.sha1)
    return (
      <li
        key={i}
        className={classes.List}
        onClick={() => showDetailHandler(contact.login.sha1)}>
        {contact.name.first}, {contact.name.last}
      </li>
    )
  })

  // console.log(show, selectContact)
  // console.log(selectedPerson, 'contacts')

  return (
    <div className={classes.Column}>
      {show
        ? (
          <Modal show={show}>
            <Card selectedPerson={selectedPerson} />
          </Modal>
        )
        : null}
      <p className={classes.Amount}>Amount</p>
      <ul>
        {contacts}
      </ul>
    </div>
  )
}

export default Contacts
