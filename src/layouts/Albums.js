import React from 'react'
import * as contentful from 'contentful'
import Moment from 'react-moment'

class Albums extends React.Component {
  state = {
    albums: []
  }

  client = contentful.createClient({
    space: 'ia5jsksmxyiy',
    accessToken: '3a6d99cc3d112f7f2c4079ad5e65399ac7f9eac35f96fab44b501f192498aa20'
  })

  componentDidMount() {
    this.fetchShows('albums')
    .then(response => {
      this.setState({
        albums: response.items
      })
    });
  }

  fetchShows = type => this.client.getEntries({
    content_type: type,
    order: '-fields.releaseDate'
  })

  render() {
    return (
      <div className="albums">
        { this.state.albums.map(({fields}, i) =>
          <div className="albums__card" key={i}>
            <img src={ fields.artwork.fields.file.url} alt=""/>
            <div className="albums__details">
              <h1 className="albums__title">{ fields.title }</h1>
              <Moment date={fields.releaseDate} format="MMMM DD, YYYY" className="albums__date" />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Albums
