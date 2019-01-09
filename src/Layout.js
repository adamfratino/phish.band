import React from 'react'
import Header from './layouts/Header'
import Main from './layouts/Main'
import Footer from './layouts/Footer'

class Layout extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default Layout;
