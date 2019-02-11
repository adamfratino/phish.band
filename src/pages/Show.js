import React from 'react'
import { connect } from 'react-redux'
import { loadCurrentShow } from '../store/Show'

class Show extends React.Component {
  componentDidMount() {
    const { id: date } = this.props.match.params
    // const { show, dispatch } = this.props
    console.log(this.props);
    // if (!show.length) dispatch(loadCurrentShow(date))
  }

  render() {
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
