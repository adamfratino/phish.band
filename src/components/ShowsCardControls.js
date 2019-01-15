import React from 'react'
import { Link } from 'react-router-dom'
import { AccordionItemTitle } from 'react-accessible-accordion'

class ShowsCardControls extends React.Component {
  render() {
    const { path } = this.props
    return (
      <div className="shows-card__controls">
        <AccordionItemTitle className="shows-card__button shows-card__button--toggle"></AccordionItemTitle>
        <Link to ={path} className="shows-card__button shows-card__button--details">Details</Link>
      </div>
    )
  }
}

export default ShowsCardControls
