import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import Runs from './Runs'
import Thumbnail from './Thumbnail'

const ShowsCard = ({ locationName, date, run, thumbnail }) => (
  <li className="shows-card">
    <Runs date={date} run={run} />
    <Link to={`show/${date.split('T')[0]}`}>
      <div className="shows-card__date">
        <Moment format="MMM" date={ date } className="shows-card__date--month" />
        <Moment format="D" date={ date } className="shows-card__date--day" />
        <Moment format="YYYY" date={ date } className="shows-card__date--year" />
      </div>
      <Thumbnail src={thumbnail.fields.file.url} />
      <h1 className="shows-card__venue">{locationName}</h1>
    </Link>
  </li>
)

export default ShowsCard
