import React from 'react'
import Moment from 'react-moment'
import GoogleMapReact from 'google-map-react'
import SongDistribution from '../components/SongDistribution'
import DarkSkyApi from 'dark-sky-api'
import DarkSky from 'react-icons-weather'

// import { convertToSeconds } from '../utilities/convertToSeconds'

DarkSkyApi.apiKey = '21514df862a709b7249a551a4246c802'
const mapTheme = require('../data/mapTheme.json')

const MapMarker = () => <svg version="1.1" id="Layer_1" x="0px" y="0px"
	 viewBox="0 0 83.1 96.7" height="50px" width="50px">
<path d="M78.5,31.6c-1-0.8-1.9-1.3-2.7-1.6c-2.2-3.8-10.9-16.3-30.3-17.3V5.5c0-1.2-0.9-2.3-2.2-2.4C42.7,3,27.7,1.3,15.6,12
	C6,20.5,1.1,34.3,1.1,52.9c0,27.7,21.6,42.6,41.9,42.6c1.4,0,2.5-1.1,2.5-2.5V72.9c0-0.8-0.4-1.5-1-2c-0.6-0.5-1.5-0.6-2.2-0.4
	c-6.8,2.2-23.7,5.8-30.8,0.2c1.4-3,5.1-8.7,14.1-12.4v9.4c0,1.4,1.1,2.5,2.5,2.5c5.7,0,16.3-3.3,17.3-15.4c0.2,0,0.4,0,0.6,0h28.3
	c0.7,0,1.3-0.3,1.7-0.7c0.5-0.5,0.7-1.1,0.7-1.8c0-0.2-0.1-1.9-0.8-4.3c2.2-1.8,5.9-5.4,6.1-9.6C82,36.6,81.5,34,78.5,31.6z
	 M40.5,76.2v14.3c-11.3-0.6-19.9-5.7-25.8-12.8C23.5,80,35,77.6,40.5,76.2z M18.8,15.7c7.9-7,17.5-7.9,21.7-7.9c0,0,0,0,0.1,0v4.9
	c-12.1,0.6-22.7,5.9-29.8,14.2C12.8,22.4,15.5,18.7,18.8,15.7z M30.3,65v-8.4c2.9-0.8,6.1-1.4,9.9-1.7C39.3,62.3,33.7,64.4,30.3,65z
	 M45.8,49.9c-1.1,0-2.1,0-3.1,0.1c-1.8-0.1-12.3-1.4-12.3-12.6c0-11.9,12.2-13.1,12.7-13.1c1.3-0.1,2.4-1.3,2.3-2.6
	c-0.1-1.4-1.3-2.4-2.6-2.3c-6,0.5-17.2,4.8-17.2,18c0,6.8,3,11.1,6.6,13.8c-14,2.9-20.7,9.9-23.8,14.9C6.8,61.8,6,57.3,6,52.9
	c0-19.8,16.3-35.4,37.1-35.4c16,0,24.1,8.6,27.3,13.1c-1.8,1.1-3.3,2.8-4.6,4.4c-2.6,3.1-5.3,6.2-9.8,6.2
	c-9.2,0-10.6-11.1-10.6-11.6c-0.1-1.3-1.4-2.3-2.7-2.2c-1.3,0.1-2.3,1.4-2.2,2.7c0.6,5.5,4.6,16,15.5,16c4.2,0,7.3-1.8,9.7-3.9
	c3.6,2.3,5,5.5,5.6,7.7C71.3,49.9,45.8,49.9,45.8,49.9z M73.7,43.4c-1.1-1.7-2.6-3.4-4.6-4.8c0.1-0.1,0.3-0.3,0.4-0.4
	c3.6-4.2,4.1-4.2,6-2.7c1.5,1.2,1.6,2.2,1.6,2.8C77,40,75.3,42,73.7,43.4z"/>
<circle cx="56.4" cy="30.6" r="3.5"/>
</svg>


class Show extends React.Component {
  state = {
    weather: {
      summary: ' ',
      icon: 'snow'
    },
		songTimes: []
  }

  createMapOptions(maps) {
    return {styles: mapTheme}
  }

  componentWillMount() {
    this.getForecast()
		// convertToSeconds(this.props.set1Times[0])
  }

  getForecast() {
    const date = `${this.props.date.split('T')[0]}T19:00:00`
    const coords = {
      latitude: this.props.location.lat,
      longitude: this.props.location.lon
    }

    DarkSkyApi.loadTime(date, coords)
      .then(result => {
        this.setState({
          weather: {
            summary: result.currently.summary,
            icon: result.currently.icon
          }
        })
      });
  }

  render() {
    let {locationName, date, location, run, thumbnail, set1, set1Times, set2, set2Times, set3, set3Times, encore,  encoreTimes, id} = this.props

    // Calculate tatal minutes for each set
    let set1Minutes = set1Times ? set1Times.map(time => +time.split(':')[0]) : undefined
    let set2Minutes = set2Times ? set2Times.map(time => +time.split(':')[0]) : undefined
    let set3Minutes = set3Times ? set3Times.map(time => +time.split(':')[0]) : undefined
    let encoreMinutes = encoreTimes ? encoreTimes.map(time => +time.split(':')[0]) : undefined

    let totalSongs = 0

    // Calculate total songs
    if (set3) {
      totalSongs = set1.length + set2.length + set3.length + encore.length
    } else {
      totalSongs = set1.length + set2.length + encore.length
    }

    return (
      <div className="show">
        <div className="show-inner">
          <div className="show__details">
            {run &&
              <div className="card__runs">
                {run.map(item => <small key={`${date}_${item}`} className="card__run">{ item }</small>)}
              </div>
            }
            <h1 className="show__venue">{ locationName }</h1>
            <Moment format="MMMM DD, YYYY" className="show__date" date={ date } />
          </div>

          <div className="show__setlist">
            {set1 &&
              <ul className="card__sets-set">
                <strong className="card__sets-title">First</strong>
                {set1.map( (song, i) =>
                  <li key={`${id}_${i}`} className="card__sets-song">
                    { song }
                    {set1Times && <small>{set1Times[i]}</small>}
                  </li>
                )}
                <strong className="show__setlist-info">{ set1.length } songs</strong>
                { set1Minutes && <strong className="show__setlist-info">{set1Minutes.reduce((a, b) => a + b)} minutes</strong>}
              </ul>
            }
            {set2 &&
              <ul className="card__sets-set">
                <strong className="card__sets-title">Second</strong>
                {set2.map( (song, i) =>
                  <li key={`${id}_${i}`} className="card__sets-song">
                    { song }
                    {set2Times && <small>{set2Times[i]}</small>}
                  </li>
                )}
                <strong className="show__setlist-info">{ set2.length } songs</strong>
                { set2Minutes && <strong className="show__setlist-info">{set2Minutes.reduce((a, b) => a + b)} minutes</strong>}
              </ul>
            }
            {set3 &&
              <ul className="card__sets-set">
                <strong className="card__sets-title">Third</strong>
                {set3.map( (song, i) =>
                  <li key={`${id}_${i}`} className="card__sets-song">
                    { song }
                    {set3Times && <small>{set3Times[i]}</small>}
                  </li>
                )}
                <strong className="show__setlist-info">{ set3.length } songs</strong>
                { set3Minutes && <strong className="show__setlist-info">{set3Minutes.reduce((a, b) => a + b)} minutes</strong>}
              </ul>
            }
            {encore &&
              <ul className="card__sets-set">
                <strong className="card__sets-title">Encore</strong>
                {encore.map( (song, i) =>
                  <li key={`${id}_${i}`} className="card__sets-song">
                    { song }
                    {encoreTimes && <small>{encoreTimes[i]}</small>}
                  </li>
                )}
                <strong className="show__setlist-info">{ encore.length } songs</strong>
                { encoreMinutes && <strong className="show__setlist-info">{encoreMinutes.reduce((a, b) => a + b)} minutes</strong>}
              </ul>
            }
          </div>

          <div className="show__statistics">
            <div className="show__weather">
              <DarkSky name="darksky" iconId={this.state.weather.icon} className="show__weather-icon" />
              <span className="show__weather-summary">{ this.state.weather.summary }</span>
            </div>
            <div className="show__total">
              <strong className="show__total-songs">{ `${totalSongs}` }</strong>
            </div>
            <div className="show__cover">
              {thumbnail && <img src={ thumbnail.fields.file.url } alt="" />}
            </div>
          </div>

          <div className="show__map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyCzpin5OP1Ly_g9cTKmNtsE6HWTotvPiCk' }}
              defaultCenter={{lat: location.lat, lng: location.lon}}
              defaultZoom={ 16 }
              options={this.createMapOptions}
            >
              <MapMarker lat={location.lat} lng={location.lon} />
            </GoogleMapReact>
          </div>

          <SongDistribution {...this.props} />
        </div>
      </div>
    )
  }
}

export default Show
