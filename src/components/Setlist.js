import React from 'react'

class Setlist extends React.Component {
  render() {
    const { title, showDuration } = this.props
    const songs = Object.keys(this.props).map((k) => this.props[k].song)
    const durations = Object.keys(this.props).map((k) => this.props[k].duration)
    const isSegue = Object.keys(this.props).map((k) => this.props[k].segue)

    return (
      <ol className="setlist__set">
        <strong className="setlist__title">{title}</strong>
        {songs.map((song, i) =>
          <li key={`song_${i}`} className={`setlist__song segue_${isSegue[i]}`}>
            { song }
            {isSegue[i] && <span>{"➤"}</span>}
            {showDuration && <small>{durations[i]}</small>}</li>
        )}
      </ol>
    )
  }
}

export default Setlist
