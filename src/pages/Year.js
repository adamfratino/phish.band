import React from 'react'
import { connect } from 'react-redux'
import * as moment from 'moment'
import { convertToSeconds } from '../utilities/convertToSeconds'
import { ReactComponent as Loading } from '../assets/icons/bouncingDonut.svg'

class Year extends React.Component {
  totalTime = []
  sortedSongsByTime = []
  sortedSongsByLength = []

  render() {
    this.createSongList()
    if (this.totalTime.length) {
      this.reduceSongTotals()
      // console.log('ordered by times played', this.sortedSongsByLength);
      // console.log('ordered by length played', this.sortedSongsByTime);
      this.sortedSongsByTime.forEach(song => {
        console.log(`${song.song} was played ${song.duration.length} times for a total of ${moment.duration(song.total, 'seconds').format('hh:mm:ss', { trim: false })}`);
      })
    }


    return (
      <React.Fragment>
        { this.props.data.loading
            ? <div className="loading-container">
                <Loading />
              </div>
            : <div>check console log</div>
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

  findSong(songName) {
    const song = this.totalTime.find(song => song.song === songName)
    if (song) {
      const seconds = song.duration.reduce((a, b) => a + b)
      return `${song.song} was played for ${moment.duration(seconds, 'seconds').format('h:mm:ss')}`
    }
  }

  createSongList() {
    const { shows } = this.props.data

    shows.find((item) => {
      const {set1, set2, set3, encore} = item.fields
      let sets = [set1, set2, set3, encore].filter(item => item)

      sets.forEach((set) => {
        set.forEach(song => {
          const currentSong = song.song
          const index = this.totalTime.findIndex(song => song.song === currentSong)

          if (song.song === currentSong && index === -1) {
            this.totalTime.push({
              "song": currentSong,
              "duration": [convertToSeconds(song.duration)]
            })
          } else {
            let songEntry = this.totalTime.find(song => song.song === currentSong)
            songEntry.duration.push(convertToSeconds(song.duration))
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
