import React from 'react'
import * as contentful from 'contentful'
import Card from '../components/Card'

class Main extends React.Component {
  state = {
    posts: []
  }

  client = contentful.createClient({
    space: 'ia5jsksmxyiy',
    accessToken: '3a6d99cc3d112f7f2c4079ad5e65399ac7f9eac35f96fab44b501f192498aa20'
  })

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries()

  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }

  render() {
    return (
      <main className="main" role="main">
        <div className="card-group">
          { this.state.posts.map(({fields}, i) =>
            <Card key={i} {...fields} />
          )}
        </div>
      </main>
    )
  }
}

export default Main
