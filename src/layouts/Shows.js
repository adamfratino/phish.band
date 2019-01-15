import React from 'react'
import * as contentful from 'contentful'
import Card from '../components/Card'

class Shows extends React.Component {
  state = {
    shows: []
  }

  client = contentful.createClient({
    space: 'ia5jsksmxyiy',
    accessToken: '3a6d99cc3d112f7f2c4079ad5e65399ac7f9eac35f96fab44b501f192498aa20'
  })

  componentDidMount() {
    this.fetchShows('book')
    .then(response => {
      this.setState({
        shows: response.items
      })
    });
  }

  fetchShows = type => this.client.getEntries({
    content_type: type,
    order: '-fields.date'
  })

  render() {
    return (
      <div className="shows">
        { this.state.shows.map(({fields, sys}, i) =>
          <Card key={i} {...fields} {...sys} />
        )}
      </div>
    )
  }
}

export default Shows
