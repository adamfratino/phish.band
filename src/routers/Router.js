import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Homepage from '../pages/Homepage'
import Shows from '../pages/Shows'
import Show from '../pages/Show'
import Albums from '../pages/Albums'
import Footer from '../components/Footer'
import NotFound from '../pages/NotFound'

const Router = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <main className="main">
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/shows" component={Shows} exact />
          <Route path ="/show/:id" component={Show} />
          <Route path="/albums" component={Albums} exact />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  </BrowserRouter>
)

export default Router
