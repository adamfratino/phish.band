import React from 'react'
import Setlist from './Setlist'
import Thumbnail from './Thumbnail'

class ShowDetailsInfo extends React.Component {
  render() {
    const { set1, set2, set3, encore, thumbnail } = this.props
    const sets = [set1, set2, set3, encore].filter(_ => _)
    const SET_TITLES = ["First", "Second", "Third", "Encore"]
    const setLength = sets.map((set, i) => set.length)

    return (
      <div className="show-details__info">
        <div className="setlist">
          {sets.map((set, i) =>
            <Setlist {...set} key={i} title={i + 1 === sets.length ? 'Encore' : SET_TITLES[i]} showDuration />
          )}
        </div>

        <div className="show-details__info__sidebar">
          <div className="show-details__info__metrics">
            {setLength && setLength.length &&
              <div className="show-details__info__metrics--card song-total">
                {setLength.reduce((a, b) => a + b)}
              </div>
            }
          </div>
          {thumbnail &&
            <div className="thumbnail">
              <Thumbnail src={thumbnail.fields.file.url} />
            </div>
          }
        </div>
      </div>
    )
  }
}

export default ShowDetailsInfo
