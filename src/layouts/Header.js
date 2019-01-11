import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>Phish.band</h1>
        <NavLink activeClassName="is-active" to="/shows">Shows</NavLink>
        <NavLink activeClassName="is-active" to="/albums">Albums</NavLink>
      </header>
    )
  }
}

export default Header
