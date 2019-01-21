import React from 'react'
// import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'
import * as contentful from 'contentful'
import * as moment from 'moment'
import { convertToSeconds } from '../utilities/convertToSeconds'
// import { ReactComponent as Loading } from '../assets/icons/bouncingDonut.svg'

const apiKeys = require('../data/apiKeys.json')

class Year extends React.Component {
  client = contentful.createClient({
    space: apiKeys.contentful.space,
    accessToken: apiKeys.contentful.accessToken
  })

  filterForSong(songName) {
    const { shows } = this.props.data
    let totalTime = []

    shows.find((item, i) => {
      const {set1, set2, set3, encore} = item.fields
      let sets = [set1, set2, set3, encore].filter(item => item)

      sets.forEach((set, i) => {
        set.forEach(song => {
          if (song.song === songName) {
            // console.log(set, song.song, convertToSeconds(song.duration))
            totalTime.push(convertToSeconds(song.duration))
          }
        })
      })
    })

    if (totalTime.length) {
      let time = totalTime.reduce((a, b) => a + b)
      console.log(moment.duration(time, 'seconds').format('h:mm:ss'));
    }
  }

  render() {
    this.filterForSong(`Everything's Right`)

    return (
      <div className="year">year report</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(Year)
