import React from 'react'
import Moment from 'react-moment'
import Geocode from 'react-geocode'
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/minimal-example.css'

Geocode.setApiKey('AIzaSyCzpin5OP1Ly_g9cTKmNtsE6HWTotvPiCk')

class Card extends React.Component {
  state = {
    address: '',
    active: false
  }

  componentDidMount() {
    let {location} = this.props

    this.toCityState(location.lat, location.lon)
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
            address.state = component.short_name
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

  render() {
    let {locationName, date, thumbnail, set1, set2, set3, encore, id} = this.props
    let {address} = this.state

    return (
      <Accordion className="card">
        <AccordionItem>
          <AccordionItemTitle className="card__details">
            <div className="card__date">
              <div>
                <Moment format="MMM DD" date={ date } className="card__month" />
                <Moment format="dddd" date={ date } className="card__weekday" />
              </div>
            </div>
            <div className="card__location">
              <h2 className="card__venue">{ locationName }</h2>
              <p className="card__location">{ address }</p>
            </div>
          </AccordionItemTitle>

          <AccordionItemBody className="card__sets">
            {thumbnail && <img src={ thumbnail.fields.file.url } className="card__sets-thumbnail" alt="" />}
            {set1 &&
              <ul className="card__sets-set">
                <strong className="card__sets-title">First [{ set1.length }]</strong>
                {set1.map( (song, i) => <li key={`${id}_${i}`} className="card__sets-song">{ song }</li>)}
              </ul>
            }
            {set2 &&
              <ul className="card__sets-set">
                <strong className="card__sets-title">Second [{ set2.length }]</strong>
                {set2.map( (song, i) => <li key={`${id}_${i}`} className="card__sets-song">{ song }</li>)}
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
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
    )
  }
}

export default Card
