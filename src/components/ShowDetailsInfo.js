import React from 'react'
import Setlist from './Setlist'

class ShowDetailsInfo extends React.Component {
  render() {
    const { set1, set2, set3, encore } = this.props
    return (
      <div className="show-details__info">
        <div className="setlist">
          {set1 && <Setlist {...set1} title={"First"} showDuration />}
          {set2 && <Setlist {...set2} title={"Second"} showDuration />}
          {set3 && <Setlist {...set3} title={"Third"} showDuration />}
          {encore && <Setlist {...encore} title={"Encore"} showDuration />}
        </div>
      </div>
    )
  }
}

export default ShowDetailsInfo
