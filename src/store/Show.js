import * as contentful from 'contentful'
import * as actions from './show/actions'

const apiKeys = require('../data/apiKeys.json')

const client = contentful.createClient({
  space: apiKeys.contentful.space,
  accessToken: apiKeys.contentful.accessToken
})

const error = err => console.log(err)

export function loadCurrentShow(date) {
  return dispatch => {
    return client.getEntries({
      content_type: 'book',
      'fields.date': date
    })
    .then(({items}) => {
      console.log(items);
      // const shows = Object.values(items).map((object, i) => object.fields)
      // dispatch(actions.loadShowsSuccess(shows))
    }).catch(error)
  }
}
