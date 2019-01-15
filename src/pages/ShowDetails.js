import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.data
  }
}

class ShowDetails extends React.Component {
  render() {
    const { id } = this.props.match.params

    return (
      <div className="show-details">Show: { id }</div>
    )
  }
}

export default connect(mapStateToProps)(ShowDetails)
