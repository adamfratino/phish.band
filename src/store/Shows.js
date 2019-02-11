import * as contentful from 'contentful'
import * as actions from './shows/actions'

const apiKeys = require('../data/apiKeys.json')

const client = contentful.createClient({
  space: apiKeys.contentful.space,
  accessToken: apiKeys.contentful.accessToken
})

const error = err => console.log(err)

export function loadShows() {
  return dispatch => {
    return client.getEntries({
      content_type: 'book',
      order: '-fields.date',
      limit: 1000
    })
    .then(({items}) => {
      const shows = Object.values(items).map((object, i) => object.fields)
      dispatch(actions.loadShowsSuccess(shows))
    }).catch(error)
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
    })
    .then(({ items }) => {
      const shows = Object.values(items).map((object, i) => object.fields)
      dispatch(actions.loadShowsSuccess(shows))
    }).catch(error)
  }
}
