import React from 'react'
import Moment from 'react-moment'
import GoogleMapReact from 'google-map-react'

const mapTheme = require('../data/mapTheme.json')

class Show extends React.Component {
  createMapOptions(maps) {
    return {styles: mapTheme}
  }

  render() {
    let {locationName, date, location, run, thumbnail, set1, set2, set3, encore, id} = this.props

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
                <strong className="card__sets-title">First [{ set1.length }]</strong>
                  {set1.map( (song, i) => <li key={`${id}_${i}`} className="card__sets-song">{ song }</li>)}
              </ul>
            }
            {set2 &&
              <ul className="card__sets-set">
                <strong className="card__sets-title">Second [{ set2.length }]</strong>
                {set2.map( (song, i) => <li key={`${id}_${i+1}`} className="card__sets-song">{ song }</li>)}
              </ul>
            }
            {set3 &&
              <ul className="card__sets-set">
                <strong className="card__sets-title">Third [{ set3.length }]</strong>
                {set3.map( (song, i) => <li key={`${id}_${i}`} className="card__sets-song">{ song }</li>)}
              </ul>
            }
            {encore &&
              <ul className="card__sets-set">
                <strong className="card__sets-title">Encore [{ encore.length }]</strong>
                {encore.map( (song, i) => <li key={`${id}_${i}`} className="card__sets-song">{ song }</li>)}
              </ul>
            }
          </div>

          <div className="show__media">
            <div className="show__cover">
              {thumbnail && <img src={ thumbnail.fields.file.url } alt="" />}
            </div>
          </div>

          <div className="show__map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyCzpin5OP1Ly_g9cTKmNtsE6HWTotvPiCk' }}
              defaultCenter={{lat: location.lat, lng: location.lon}}
              defaultZoom={ 15 }
              options={this.createMapOptions}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Show
