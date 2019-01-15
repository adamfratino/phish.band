import React from 'react'
// import Moment from 'react-moment'
import Geocode from 'react-geocode'
// import jump from 'jump.js'
import { Link } from 'react-router-dom'
// import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion'
// import 'react-accessible-accordion/dist/minimal-example.css'
// import { toggleAccordion } from '../utilities/toggleAccordion'

Geocode.setApiKey('AIzaSyCzpin5OP1Ly_g9cTKmNtsE6HWTotvPiCk')

class Card extends React.Component {
  state = {
    address: ''
  }

  componentDidMount() {
    let {location} = this.props
    console.log(this.props);
    // this.toCityState(location.lat, location.lon)
  }

  // toCityState(lat, lon) {
  //   Geocode.fromLatLng(lat, lon).then(
  //     response => {
  //       let address = {}
  //       let results = response.results[0].address_components
  //
  //       results.forEach((result, i) => {
  //         let component = response.results[0].address_components[i]
  //
  //         if (component.types.includes('sublocality') || component.types.includes('locality')) {
  //           address.city = component.long_name
  //         } else if (component.types.includes('administrative_area_level_1')) {
  //           address.state = component.long_name
  //         } else if (component.types.includes('country')) {
  //           address.country = component.long_name
  //         }
  //       })
  //
  //       this.setState({
  //         address: `${address.city}, ${address.state}`
  //       })
  //     },
  //     error => console.error(error)
  //   )
  // }

  // render() {
    // let {locationName, date, run, thumbnail, set1, set2, set3, encore, id} = this.props
  //   let {address} = this.state
  //
  //   let dateHash = date.replace(/-/g, '/').split('T')[0]
  //
  //   return (
  //     <Accordion className="card" onClick={ toggleAccordion }>
  //       <AccordionItem>
  //
  //         <div className="card__details">
  //           <AccordionItemTitle className="card__date">
  //             <Moment format="YYYY" date={ date } className="card__year" />
  //             <Moment format="MMM DD" date={ date } className="card__month" />
  //             <Moment format="dddd" date={ date } className="card__weekday" />
  //           </AccordionItemTitle>
  //
  //           <div className="card__location">
  //             {run &&
  //               <div className="card__runs">
  //                 {run.map(item => <small key={`${date}_${item}`} className="card__run">{ item }</small>)}
  //               </div>
  //             }
  //             <h2 className="card__venue">{ locationName }</h2>
  //             <p className="card__address">{ address }</p>
  //           </div>
  //
  //           <div className="card__controls">
  //             <AccordionItemTitle className="card__button card__button--toggle"></AccordionItemTitle>
  //             <Link to={`/${ dateHash }`} className="card__button card__button--details">Details</Link>
  //           </div>
  //
  //         </div>
  //
  //         <AccordionItemBody className="card__sets">
  //           {thumbnail && <img src={ thumbnail.fields.file.url } className="card__sets-thumbnail" alt="" />}
  //           {set1 &&
  //             <ul className="card__sets-set">
  //               <strong className="card__sets-title">First</strong>
  //               {set1.map( (song, i) => <li key={`${id}_${i}`} className="card__sets-song">{ song }</li>)}
  //             </ul>
  //           }
  //           {set2 &&
  //             <ul className="card__sets-set">
  //               <strong className="card__sets-title">Second</strong>
  //               {set2.map( (song, i) => <li key={`${id}_${i+1}`} className="card__sets-song">{ song }</li>)}
  //             </ul>
  //           }
  //           {set3 &&
  //             <ul className="card__sets-set">
  //               <strong className="card__sets-title">Third</strong>
  //               {set3.map( (song, i) => <li key={`${id}_${i}`} className="card__sets-song">{ song }</li>)}
  //             </ul>
  //           }
  //           {encore &&
  //             <ul className="card__sets-set">
  //               <strong className="card__sets-title">Encore</strong>
  //               {encore.map( (song, i) => <li key={`${id}_${i}`} className="card__sets-song">{ song }</li>)}
  //             </ul>
  //           }
  //         </AccordionItemBody>
  //       </AccordionItem>
  //     </Accordion>
  //   )
  // }

  render() {
    let {locationName, date, run, thumbnail, set1, set2, set3, encore, id} = this.props
    let {address} = this.state
    return (
      <div className="test">
        test
      </div>
    )
  }
}

export default Card
