import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Homepage from '../pages/Homepage'
import ShowsList from '../pages/ShowsList'
import ShowDetails from '../pages/ShowDetails'
import Albums from '../pages/Albums'
import Footer from '../components/Footer'
import NotFound from '../pages/NotFound'

// const Router = () => (
//   <BrowserRouter>
//     <React.Fragment>
//       <Header />
//       <main className="main">
//         <Switch>
//           <Route path="/" component={Homepage} exact />
//           <Route path="/shows" component={ShowsList} exact />
//           <Route path ="/show/:id" component={ShowDetails} />
//           <Route path="/albums" component={Albums} exact />
//           <Route component={NotFound} />
//         </Switch>
//       </main>
//       <Footer />
//     </React.Fragment>
//   </BrowserRouter>
// )

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <main className="main">
            <Switch>
              <Route path="/" component={Homepage} exact />
              <Route path="/shows" component={ShowsList} exact />
              <Route path ="/show/:id" render={(props) => <ShowDetails {...props} isAuthed={true} />} />
              <Route path="/albums" component={Albums} exact />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default Router
