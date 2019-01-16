import React from 'react'
import { connect } from 'react-redux'
import ShowsCard from '../components/ShowsCard'

class ShowsList extends React.Component {
  render() {
    const { shows } = this.props.data

    return (
      <React.Fragment>
        { this.props.data.loading
            ? <div>Loading</div>
            : <ul className="shows-list">
                { shows.map(({fields}, i) =>
                  <ShowsCard key={`card_${i}`} {...fields} />
                )}
              </ul>
         }
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(ShowsList)
