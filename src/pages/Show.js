import React from 'react'
import { connect } from 'react-redux'
import { loadCurrentShow } from '../store/Show'
import ShowHeader from '../components/ShowHeader'
import Setlist from '../components/Setlist'
import ShowMap from '../components/ShowMap'
import Loading from '../components/Loading'

class Show extends React.Component {
  componentDidMount() {
    const { id: date } = this.props.match.params
    const { dispatch } = this.props
    dispatch(loadCurrentShow(date))
  }

  render() {
    const { locationName: venue, run, date, location, set1, set2, set3, encore } = this.props.show
    const sets = [set1, set2, set3, encore].filter(item => item)
    const SET_TITLES = ["First", "Second", "Third", "Encore"]

    return (
      <div className="show">
        { this.props.loading
          ? <Loading />
          : <React.Fragment>
              <ShowHeader
                run={run}
                venue={venue}
                date={date}
              />
              <div className="setlist">
                {sets.map((set, i) =>
                  <Setlist
                    {...set}
                    key={i}
                    title={i + 1 === sets.length ? 'Encore' : SET_TITLES[i]}
                    showDuration
                    showDetails
                  />
                )}
              </div>
              <ShowMap
                key={date}
                lat={location.lat}
                lon={location.lon}
              />
            </React.Fragment>
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
