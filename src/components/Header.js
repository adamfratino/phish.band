import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { InstantSearch, Hits, SearchBox } from 'react-instantsearch-dom';

const apiKeys = require('../data/apiKeys.json')

const SearchField = () => (
  <InstantSearch
    appId={apiKeys.algolia.id}
    apiKey={apiKeys.algolia.search}
    indexName="Shows"
  >
    <Search />
  </InstantSearch>
);

function Search() {
  return (
    <React.Fragment>
      <SearchBox
        translations={{
          placeholder: 'Search a Date, Venue, or Song'
        }}
      />
      <Hits hitComponent={Hit} />
    </React.Fragment>
  );
}

const Hit = ({ hit }) => {
  let formattedDate = hit.date.split('T')[0]
  return (
    <Link to={`/show/${formattedDate}`} className="search-dropdown">
      <span>{hit.locationName}</span>
      <span>{formattedDate}</span>
    </Link>
  )
}

const Header = () => (
  <header className="header">
    <NavLink to="/">Phish.band</NavLink>
    <SearchField />
    <NavLink activeClassName="is-active" to="/shows">Shows</NavLink>
  </header>
)

export default Header
