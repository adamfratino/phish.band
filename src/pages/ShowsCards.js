import React from 'react'
import { connect } from 'react-redux'
import { ReactComponent as Loading } from '../assets/icons/bouncingDonut.svg'
import ShowsCard from '../components/ShowsCard'

class ShowsList extends React.Component {
  render() {
    const { shows } = this.props.data

    return (
      <React.Fragment>
        { this.props.data.loading
            ? <div className="loading-container">
                <Loading />
              </div>
            : <ul className="shows-cards">
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
