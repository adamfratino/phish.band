import React from 'react'
import GoogleMapReact from 'google-map-react'

const mapTheme = require('../data/mapTheme.json')
const apiKeys = require('../data/apiKeys.json')

const MapMarker = () => <svg height="50" width="50" viewBox="0 0 133.6 133.6"><circle cx="66.8" cy="66.8" r="63.8" fill="#f1b434" stroke="#000" strokeMiterlimit="10" strokeWidth="6"/><path d="M104.83,52.27a10,10,0,0,0-2.7-1.6c-2.2-3.8-10.9-16.3-30.3-17.3v-7.2a2.4,2.4,0,0,0-2.2-2.4c-.6-.1-15.6-1.8-27.7,8.9-9.6,8.5-14.5,22.3-14.5,40.9,0,27.7,21.6,42.6,41.9,42.6a2.48,2.48,0,0,0,2.5-2.5V93.57a2.61,2.61,0,0,0-1-2,2.49,2.49,0,0,0-2.2-.4c-6.8,2.2-23.7,5.8-30.8.2,1.4-3,5.1-8.7,14.1-12.4v9.4a2.48,2.48,0,0,0,2.5,2.5c5.7,0,16.3-3.3,17.3-15.4h28.9A2.39,2.39,0,0,0,103,73a18.94,18.94,0,0,0-.8-4.3c2.2-1.8,5.9-5.4,6.1-9.6A8.34,8.34,0,0,0,104.83,52.27Zm-38,44.6v14.3A35.09,35.09,0,0,1,41,98.37C49.83,100.67,61.33,98.27,66.83,96.87Zm-21.7-60.5c7.9-7,17.5-7.9,21.7-7.9h.1v4.9a41.59,41.59,0,0,0-29.8,14.2A33.06,33.06,0,0,1,45.13,36.37Zm11.5,49.3v-8.4a52.07,52.07,0,0,1,9.9-1.7C65.63,83,60,85.07,56.63,85.67Zm15.5-15.1c-1.1,0-2.1,0-3.1.1-1.8-.1-12.3-1.4-12.3-12.6,0-11.9,12.2-13.1,12.7-13.1a2.52,2.52,0,0,0,2.3-2.6,2.45,2.45,0,0,0-2.6-2.3c-6,.5-17.2,4.8-17.2,18,0,6.8,3,11.1,6.6,13.8-14,2.9-20.7,9.9-23.8,14.9a38,38,0,0,1-2.4-13.2c0-19.8,16.3-35.4,37.1-35.4,16,0,24.1,8.6,27.3,13.1a19.24,19.24,0,0,0-4.6,4.4c-2.6,3.1-5.3,6.2-9.8,6.2-9.2,0-10.6-11.1-10.6-11.6a2.46,2.46,0,0,0-4.9.5c.6,5.5,4.6,16,15.5,16a14.35,14.35,0,0,0,9.7-3.9,13,13,0,0,1,5.6,7.7Zm27.9-6.5a17.31,17.31,0,0,0-4.6-4.8l.4-.4c3.6-4.2,4.1-4.2,6-2.7a3.37,3.37,0,0,1,1.6,2.8C103.33,60.67,101.63,62.67,100,64.07Z" transform="translate(-1.33 -1.77)"/><circle cx="77.4" cy="47.5" r="3.5"/></svg>



class ShowDetailsMap extends React.Component {
	createMapOptions(maps) {
		return {styles: mapTheme}
	}

  render() {
		const {lat, lon} = this.props

    return (
			<div className="show-details__map">
				{lat !== 0 && lon !== 0 &&
					<GoogleMapReact
						bootstrapURLKeys={{ key: apiKeys.geocode }}
						backgroundColor={"black"}
						defaultCenter={{
							lat: lat, lng: lon}}
						defaultZoom={ 16 }
						options={this.createMapOptions}
					>
						<MapMarker lat={lat} lng={lon} />
					</GoogleMapReact>
				}
      </div>
    )
  }
}

export default ShowDetailsMap
