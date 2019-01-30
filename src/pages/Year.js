import React from 'react'
import { connect } from 'react-redux'
import * as moment from 'moment'
import { convertToSeconds } from '../utilities/convertToSeconds'
import { ReactComponent as Loading } from '../assets/icons/bouncingDonut.svg'
// import YearChartLength from '../components/YearChartLength'
import YearChartTime from '../components/YearChartTime'

class Year extends React.Component {
  totalTime = []
  sortedSongsByTime = []
  sortedSongsByLength = []

  render() {
    const year = this.props.match.params.id

    this.createSongList(year)
    if (this.totalTime.length) {
      this.reduceSongTotals()
    }

    return (
      <React.Fragment>
        { this.props.data.loading
            ? <div className="loading-container">
                <Loading />
              </div>
            : <div className="year">
                <h1 className="year-title">{year} Phish in Review</h1>
                <div className="year__header">
                  <div className="year__header--song">
                    <span className="year__header--song-title">Song of the Year</span>
                    <h2>{this.sortedSongsByLength[0].song}</h2>
                    <h3>Played <span>{this.sortedSongsByLength[0].duration.length} times</span> for <span>{moment.duration(this.sortedSongsByTime[0].total, 'seconds').format('h [hours], m [minutes &] s [seconds]')}</span></h3>
                  </div>

                  <div className="year__header--totals">
                    <h2>{this.sortedSongsByLength.length}</h2>
                    <span className="year__header--totals-footer">Different<br/>Songs Played</span>
                  </div>

                  <div className="year__header--totals">
                    <h2>TODO</h2>
                    <span className="year__header--totals-footer">Shows<br/>Played</span>
                  </div>
                </div>
                <YearChartTime year={year} songs={this.sortedSongsByTime} />
              </div>
        }
      </React.Fragment>
    )
  }

  reduceSongTotals() {
    this.totalTime.forEach((song, i) => {
      song.total = song.duration.reduce((a, b) => a + b)
    })
    this.sortSongsByTime()
    this.sortSongsByLength()
  }

  sortSongsByLength() {
    function compare(a,b) {
      if (a.duration.length < b.duration.length) return 1;
      if (a.duration.length > b.duration.length) return -1;
      return 0;
    }
    this.sortedSongsByLength = [...this.totalTime.sort(compare)]
  }

  sortSongsByTime() {
    function compare(a,b) {
      if (a.total < b.total) return 1;
      if (a.total > b.total) return -1;
      return 0;
    }
    this.sortedSongsByTime = [...this.totalTime.sort(compare)]
  }

  // findSong(songName) {
  //   const song = this.totalTime.find(song => song.song === songName)
  //   if (song) {
  //     const seconds = song.duration.reduce((a, b) => a + b)
  //     return `${song.song} was played for ${moment.duration(seconds, 'seconds').format('h:mm:ss')}`
  //   }
  // }

  createSongList(year) {
    const { shows } = this.props.data

    // eslint-disable-next-line
    shows.find((item) => {
      const {set1, set2, set3, encore, date} = item.fields
      let sets = [set1, set2, set3, encore].filter(item => item)

      sets.forEach((set) => {
        set.forEach(song => {
          const currentSong = song.song
          const index = this.totalTime.findIndex(song => song.song === currentSong)

          if (date.split('-')[0] === year) {
            if (song.song === currentSong && index === -1) {
              this.totalTime.push({
                "song": currentSong,
                "duration": [convertToSeconds(song.duration)]
              })
            } else {
              let songEntry = this.totalTime.find(song => song.song === currentSong)
              songEntry.duration.push(convertToSeconds(song.duration))
            }
          }
        })
      })
    })
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(Year)
