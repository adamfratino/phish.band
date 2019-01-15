import React from 'react'

const Show = (props) => {
  const {match} = props
  return (
    <div className="show">Show date: { match.params.id }</div>
  )
}

export default Show
