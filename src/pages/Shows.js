import React from 'react'
import { connect } from 'react-redux'
import ShowsCard from '../components/ShowsCard'

class Shows extends React.Component {
  render() {
    const { shows } = this.props

    return (
      <ul className="shows">
        { shows.map((show, i) =>
          <ShowsCard key={`card_${i}`} {...show} />
        )}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shows: state.shows
  }
}

export default connect(mapStateToProps)(Shows)