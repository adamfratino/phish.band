import React from 'react'

class Thumbnail extends React.Component {
  render() {
    const { src } = this.props
    return (
      <img src={src} alt=""/>
    )
  }
}

export default Thumbnail
