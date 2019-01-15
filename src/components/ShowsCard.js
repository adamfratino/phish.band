import React from 'react'
import ShowsCardDetails from './ShowsCardDetails'

class ShowsCard extends React.Component {
  render() {
    return (
      <li className="shows-card">
        <ShowsCardDetails {...this.props} />
      </li>
    )
  }
}

export default ShowsCard
