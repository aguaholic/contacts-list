import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import classes from './Card.module.css'
const Card = ({ contact, onClose }) => {
  return (
    <>
      <AiOutlineCloseCircle
        className={classes.Close}
        onClick={onClose} />
      <div className={classes.Card}>
        <div className={classes.Img}>
          <img src={contact.picture.medium} alt={contact.name.last} />
        </div>
        <div className={classes.Text}>
          <h2>{contact.name.last.toUpperCase()}, {contact.name.first}</h2>
          <div>
            <strong>email:</strong> {contact.email}
          </div>
          <div>
            <strong>phone:</strong> {contact.phone}
          </div>
          <div>
            <strong>street:</strong> {contact.location.street.name} {contact.location.street.number}
          </div>
          <div>
            <strong>city:</strong> {contact.location.city}
          </div>
          <div>
            <strong>state:</strong> {contact.location.state}
          </div>
          <div>
            <strong>postcode:</strong> {contact.location.postcode}
          </div>
        </div>
      </div>
    </>
  )
}

Card.propTypes = {
  contact: PropTypes.object,
  onClose: PropTypes.func
}

export default Card
