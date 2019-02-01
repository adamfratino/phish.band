import * as contentful from 'contentful'
import * as actions from '../actions/shows'

const apiKeys = require('../data/apiKeys.json')

const client = contentful.createClient({
  space: apiKeys.contentful.space,
  accessToken: apiKeys.contentful.accessToken
})

export function loadShows() {
  return dispatch => {
    return client.getEntries({
      content_type: 'book',
      order: '-fields.date',
      limit: 1000
    }).then(({ items }) => {
      const shows = Object.values(items).map((object, i) => {
        return object.fields
      })
      dispatch(actions.loadShowsSuccess(shows))
    }).catch(error => {
      console.log(error)
    })
  }
}

export function loadShowsByYear(year) {
  return dispatch => {
    // dispatch(actions.dataLoading())
    return client.getEntries({
      content_type: 'book',
      order: '-fields.date',
      'fields.date[gte]': `${year}-01-01T00:01`,
      'fields.date[lte]': `${year}-12-31T11:59`
    }).then(({ items }) => {
      const shows = Object.values(items).map((object, i) => {
        return object.fields
      })
      dispatch(actions.loadShowsSuccess(shows))
    }).catch(error => {
      console.log(error)
      // dispatch(actions.dataLoading(false))
    })
  }
}

export function loadAlbums() {
  return dispatch => {
    // dispatch(actions.dataLoading())
    return client.getEntries({
      content_type: 'albums'
    }).then(({ items }) => {
      const albums = Object.values(items).map((object, i) => {
        return object.fields
      })
      dispatch(actions.loadAlbumsSuccess(albums))
    }).catch(error => {
      console.log(error)
    })
  }
}
