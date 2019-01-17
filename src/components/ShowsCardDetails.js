import React from 'react'
import Moment from 'react-moment'
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/minimal-example.css'
import { toggleAccordion } from '../utilities/toggleAccordion'

import Setlist from './Setlist'
import ShowsCardControls from './ShowsCardControls'
import Thumbnail from './Thumbnail'

import Geocode from 'react-geocode'
const apiKeys = require('../data/apiKeys.json')
Geocode.setApiKey(apiKeys.geocode)

class ShowsCardDetails extends React.Component {
  state = {
    address: ''
  }

  componentDidMount() {
    // const { lat, lon } = this.props.location
    // this.toCityState(lat, lon)
  }

  render() {
    const { date, run, locationName, set1, set2, set3, encore, thumbnail } = this.props
    // const { address } = this.state

    return (
      <Accordion onClick={ toggleAccordion }>
        <AccordionItem>
          <div className="shows-card__details">
            <AccordionItemTitle className="shows-card__date">
              <Moment format="YYYY" date={ date } className="shows-card__date--year" />
              <Moment format="MMM DD" date={ date } className="shows-card__date--month" />
              <Moment format="dddd" date={ date } className="shows-card__date--weekday" />
            </AccordionItemTitle>

            <div className="shows-card__location">
              {run &&
                <div className="runs">
                  {run.map(item => <small key={`${date}_${item}`} className="runs__run">{ item }</small>)}
                </div>
              }
              <h1>{ locationName }</h1>
            </div>

            <ShowsCardControls path={`show/${date.split('T')[0]}`} />
          </div>

          <AccordionItemBody>
            <div className="shows-card__body">
              <div className="thumbnail">
                <Thumbnail src={thumbnail.fields.file.url} />
              </div>
              <div className="setlist">
                {set1 && <Setlist {...set1} title={"First"} />}
                {set2 && <Setlist {...set2} title={"Second"} />}
                {set3 && <Setlist {...set3} title={"Third"} />}
                {encore && <Setlist {...encore} title={"Encore"} />}
              </div>
            </div>
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
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

export default ShowsCardDetails
