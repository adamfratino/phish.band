import React from 'react'
import { connect } from 'react-redux'
import ShowsCard from '../components/ShowsCard'
import { loadShowsByYear } from '../store/Shows'

class Shows extends React.Component {
  componentDidMount() {
    const { shows, dispatch } = this.props
    if (!shows.length) dispatch(loadShowsByYear(2018))
  }

  render() {
    const { shows } = this.props

    return (
      <ul className="shows">
        { shows.map(show =>
          <ShowsCard key={show.date} {...show} />
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
