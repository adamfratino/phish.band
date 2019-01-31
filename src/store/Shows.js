import * as contentful from 'contentful'
import * as actions from './shows/actions'

const apiKeys = require('../data/apiKeys.json')

const client = contentful.createClient({
  space: apiKeys.contentful.space,
  accessToken: apiKeys.contentful.accessToken
})

export function loadYear(year) {
  return dispatch => {
    dispatch(actions.dataLoading())

    return client.getEntries({
      content_type: 'book',
      order: '-fields.date',
      'fields.date[lte]': `${year}-12-31T12:59`,
      'fields.date[gte]': `${year}-01-01T00:01`
    }).then(({items}) => {
      // setTimeout(() => dispatch(actions.loadShowsSuccess(items)), 1000)
      dispatch(actions.loadShowsSuccess(items))
    }).catch(error => {
      console.log(error)
      dispatch(actions.dataLoading(false))
    })
  }
}

export function loadSong(song) {
  return dispatch => {
    dispatch(actions.dataLoading())

    return client.getEntries({
      content_type: 'book',
      order: '-fields.date',
      query: song
    }).then(({items}) => {
      // setTimeout(() => dispatch(actions.loadShowsSuccess(items)), 1000)
      dispatch(actions.loadShowsSuccess(items))
    }).catch(error => {
      console.log(error)
      dispatch(actions.dataLoading(false))
    })
  }
}
