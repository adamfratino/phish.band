import React from 'react'
import { connect } from 'react-redux'

class Show extends React.Component {
  render() {
    // const { shows } = this.props

    return (
      <h1>show</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shows: state.shows
  }
}

export default connect(mapStateToProps)(Show)
