import React from 'react'
import DarkSkyApi from 'dark-sky-api'
import DarkSky from 'react-icons-weather'
import Setlist from './Setlist'
import Thumbnail from './Thumbnail'

const apiKeys = require('../data/apiKeys.json')
DarkSkyApi.apiKey = apiKeys.darksky

class ShowDetailsInfo extends React.Component {
  state = {
    weather: {
      summary: 'API LIMIT REACHED',
      icon: 'clear-night',
      loaded: false
    }
  }

  getForecast(date, lat, lon) {
    const coords = {
      latitude: lat,
      longitude: lon
    }

    DarkSkyApi.loadTime(date, coords).then(result => {
      this.setState({
        weather: {
          summary: result.currently.summary,
          icon: result.currently.icon,
          loaded: true
        }
      })
    });
  }

  render() {
    const { date, location, set1, set2, set3, encore, thumbnail } = this.props
    const sets = [set1, set2, set3, encore].filter(item => item)
    const SET_TITLES = ["First", "Second", "Third", "Encore"]
    const setLength = sets.map((set, i) => set.length)
    const formattedDate = `${date}T19:00:00`

    if (location.lat !== 0 && location.lon !== 0 && !this.state.weather.loaded) {
      this.getForecast(formattedDate, location.lat, location.lon)
    }

    return (
      <div className="show-details__info">
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

        <div className="show-details__info__sidebar">
          <div className="show-details__info__metrics">
            {setLength && setLength.length &&
              <div className="show-details__info__metrics--card song-total">
                {setLength.reduce((a, b) => a + b)}
              </div>
            }
            <div className="show-details__info__metrics--card show-weather">
              <DarkSky name="darksky" iconId={this.state.weather.icon} className="show-weather-icon" />
              <span className="show-weather-summary">{ this.state.weather.summary }</span>
            </div>
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
