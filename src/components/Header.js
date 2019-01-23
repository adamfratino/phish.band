import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { InstantSearch, Hits, SearchBox } from 'react-instantsearch-dom';

const apiKeys = require('../data/apiKeys.json')

const SearchField = () => (
  <InstantSearch
    appId={apiKeys.algolia.id}
    apiKey={apiKeys.algolia.search}
    indexName="Shows"
    onSearchStateChange={showSearchResults}
  >
    <Search />
  </InstantSearch>
);

function showSearchResults() {
  const input = document.querySelector('.ais-SearchBox-input')
  const results = document.querySelector('.ais-Hits')

  if (input.value.length >= 4) {
    results.classList.add('is-visible')
  } else {
    results.classList.remove('is-visible')
  }
}

function clearSearchResults() {
  const results = document.querySelector('.ais-Hits')
  document.querySelector('.ais-SearchBox-reset').click()
  results.classList.remove('is-visible')
}

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
    <Link to={`/show/${formattedDate}`} className="search-dropdown" onClick={clearSearchResults}>
      <span>{hit.locationName}</span>
      <span>{formattedDate}</span>
    </Link>
  )
}

const Header = () => (
  <header className="header">
    <NavLink to="/">Phish.band</NavLink>
    <SearchField />
    <div>
      <NavLink activeClassName="is-active" to="/year/2018">Years</NavLink>
      <NavLink activeClassName="is-active" to="/shows">Shows</NavLink>
    </div>
  </header>
)

export default Header
