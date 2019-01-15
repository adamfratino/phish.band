import React from 'react'
import Moment from 'react-moment'
import Geocode from 'react-geocode'
// import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion'

class ShowsCard extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { date, run, locationName, address } = this.props
    return (
      <li className="shows-card">
        <div className="shows-card__details">
          <div className="shows-card__date">
            <Moment format="YYYY" date={ date } className="shows-card__date--year" />
            <Moment format="MMM DD" date={ date } className="shows-card__date--month" />
            <Moment format="dddd" date={ date } className="shows-card__date--weekday" />
          </div>

          <div className="shows-card__location">
            {run &&
              <div className="shows-card__runs">
                {run.map(item => <small key={`${date}_${item}`} className="shows-card__run">{ item }</small>)}
              </div>
            }
            <h2 className="shows-card__venue">{ locationName }</h2>
            <p className="shows-card__address">{ address }</p>
          </div>
        </div>
      </li>
    )
  }

  toCityState(lat, lon) {
    Geocode.fromLatLng(lat, lon).then(
      response => {
        let address = {}
        let results = response.results[0].address_components

        results.forEach((result, i) => {
          let component = response.results[0].address_components[i]

          if (component.types.includes('sublocality') || component.types.includes('locality')) {
            address.city = component.long_name
          } else if (component.types.includes('administrative_area_level_1')) {
            address.state = component.long_name
          } else if (component.types.includes('country')) {
            address.country = component.long_name
          }
        })

        this.setState({
          address: `${address.city}, ${address.state}`
        })
      },
      error => console.error(error)
    )
  }
}

export default ShowsCard
