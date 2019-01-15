import React from 'react'
import { connect } from 'react-redux'
import ShowsCard from '../components/ShowsCard'

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.data
  }
}

class ShowsList extends React.Component {
  render() {
    const { shows } = this.props.data

    return (
      <ul className="shows-list">
        { shows.map(({fields}, i) =>
          <ShowsCard key={`card_${i}`} {...fields} />
        )}
      </ul>
    )
  }
}

export default connect(mapStateToProps)(ShowsList)
