import React from 'react'

// import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion'
import ShowsCardDetails from './ShowsCardDetails'

class ShowsCard extends React.Component {
  render() {
    return (
      <li className="shows-card">
        <ShowsCardDetails {...this.props} />
      </li>
    )
  }
}

export default ShowsCard
