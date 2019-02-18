import React from 'react'
import Moment from 'react-moment'
import Runs from './Runs'

const ShowHeader = ({ venue, date, run }) => (
  <div className="show-details__header">
    <Runs run={run} date={date} />
    <h1>{ venue }</h1>
    <Moment format="MMMM DD, YYYY" className="show__date" date={ date } />
  </div>
)

export default ShowHeader
