import React from 'react'
// import Shows from './Shows'
// import Show from './Show'
// import Albums from './Albums'
import { Route } from 'react-router-dom'
import * as contentful from 'contentful'

class Main extends React.Component {
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
      this.setState({ shows: response.items })
    });
  }

  fetchShows = type => this.client.getEntries({
    content_type: type,
    order: '-fields.date'
  })

  // render() {
  //   return (
  //     <React.Fragment>
  //       <Header />
  //       <main className="main" role="main">
  //         {this.state.shows.map(({fields}) =>
  //           <Route
  //             path={`/${fields.date.replace(/-/g, '/').split('T')[0]}`}
  //             render={() => <Show {...fields} isAuthed={true} />}
  //             key={fields.date}
  //           />
  //         )}
  //         <Route
  //           path="/shows"
  //           render={() => <Shows isAuthed={true} />}
  //         />
  //         <Route path="/albums" component={Albums} />
  //       </main>
  //       <Footer />
  //     </React.Fragment>
  //   )
  // }

  render() {
    return (
      <main className="main" role="main">main</main>
    )
  }
}

export default Main
