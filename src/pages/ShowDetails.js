import React from 'react'

class ShowDetails extends React.Component {
  render() {
    const { match } = this.props
    return (
      <div className="show-details">{ match.params.id }</div>
    )
  }
}

export default ShowDetails
