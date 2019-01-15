import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header className="header">
    <h1><NavLink to="/">Phish.band</NavLink></h1>
    <NavLink activeClassName="is-active" to="/shows">Shows</NavLink>
    <NavLink activeClassName="is-active" to="/albums">Albums</NavLink>
  </header>
)

export default Header
