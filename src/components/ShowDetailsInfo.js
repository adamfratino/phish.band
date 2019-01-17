import React from 'react'
import DarkSkyApi from 'dark-sky-api'
import DarkSky from 'react-icons-weather'
import Setlist from './Setlist'
import Thumbnail from './Thumbnail'
import * as moment from 'moment'
import 'moment-duration-format'
import { convertToSeconds } from '../utilities/convertToSeconds'

const apiKeys = require('../data/apiKeys.json')
DarkSkyApi.apiKey = apiKeys.darksky

class ShowDetailsInfo extends React.Component {
  state = {
    weather: {
      summary: 'API LIMIT REACHED',
      icon: 'rain',
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

    const totalSeconds = sets.reduce((acc, set) => {
      const setSeconds = set.reduce((setAcc, {duration}) => {
        return setAcc + convertToSeconds(duration)
      }, 0)

      return acc + setSeconds
    }, 0)

    const totalMinutes = moment.duration(totalSeconds, 'seconds').format('h:mm').split(':')[1]
    const totalHours = moment.duration(totalSeconds, 'seconds').format('h:mm').split(':')[0]

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
          {totalHours &&
            <div className="show-details__info__card show-hours">
              {totalHours}
            </div>
          }
          {totalMinutes &&
            <div className="show-details__info__card show-minutes">
              {totalMinutes}
            </div>
          }
          {setLength && setLength.length &&
            <div className="show-details__info__card song-total">
              {setLength.reduce((a, b) => a + b)}
            </div>
          }
          <div className="show-details__info__card show-weather">
            {

            }
            <DarkSky name="darksky" iconId={this.state.weather.icon} className="show-weather-icon" />
            <span className="show-weather-summary">{ this.state.weather.summary }</span>
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
