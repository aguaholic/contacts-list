import React from 'react'

const Card = (props) => {
  // console.log(props.selectedPerson)
  return (
    <div onClick={props.select}>
      {props.selectedPerson ? (
        <p>{props.name}, {props.surname}</p>)
        : null}
    </div>
  )
}

export default Card
