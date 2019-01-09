import React from 'react'

const Card = (props) => (
  <a href="#" className="card">
    <h3>{ props.title }</h3>
    <p>{ props.author }</p>
    <small>{ props.publicationDate }</small>
  </a>
)

export default Card
