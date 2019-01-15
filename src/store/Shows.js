import * as contentful from 'contentful'
import * as actions from './shows/actions'

const apiKeys = require('../data/apiKeys.json')

const client = contentful.createClient({
  space: apiKeys.contentful.space,
  accessToken: apiKeys.contentful.accessToken
})

const error = err => console.log(err)

export function loadShows() {
  return dispatch =>
    client.getEntries({
      content_type: 'book',
      order: '-fields.date'
    })
      .then(({items}) => {
        dispatch(actions.loadShowsSuccess(items))
      })
      .catch(error)
}
