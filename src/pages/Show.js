import React from 'react'
import { connect } from 'react-redux'
import { loadCurrentShow } from '../store/Show'
import ShowDetailsHeader from '../components/ShowDetailsHeader'
import Loading from '../components/Loading'

class Show extends React.Component {
  componentDidMount() {
    const { id: date } = this.props.match.params
    const { dispatch } = this.props
    dispatch(loadCurrentShow(date))
  }

  render() {
    const { locationName: venue, run, date } = this.props.show

    return (
      <div className="show">
        { this.props.loading
          ? <Loading />
          : <ShowDetailsHeader
              run={run}
              venue={venue}
              date={date}
            />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.show,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(Show)
