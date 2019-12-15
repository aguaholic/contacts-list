import React from 'react'
import PropTypes from 'prop-types'

import classes from './Card.module.css'

const Card = ({ contact, onClose }) => {
  return (
    <div>
      <div
        className={classes.Close}
        onClick={onClose}>
          X
      </div>
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
  )
}

Card.propTypes = {
  contact: PropTypes.object,
  onClose: PropTypes.func
}

export default Card
