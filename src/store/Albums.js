import * as contentful from 'contentful'
import * as actions from './albums/actions'

const apiKeys = require('../data/apiKeys.json')

const client = contentful.createClient({
  space: apiKeys.contentful.space,
  accessToken: apiKeys.contentful.accessToken
})

const error = err => console.log(err)

export function loadAlbums() {
  return dispatch =>
    client.getEntries({
      content_type: 'albums'
    })
      .then(({items}) => {
        const albums = Object.values(items).map((object, i) => object.fields)
        dispatch(actions.loadAlbumsSuccess(albums))
      })
      .catch(error)
}
