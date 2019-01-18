import * as contentful from 'contentful'
import * as actions from './shows/actions'

const apiKeys = require('../data/apiKeys.json')

const client = contentful.createClient({
  space: apiKeys.contentful.space,
  accessToken: apiKeys.contentful.accessToken
})

export function loadShows() {
  return dispatch =>{
    dispatch(actions.dataLoading())
    return client.getEntries({
      content_type: 'book',
      order: '-fields.date'
    }).then(({items}) => {
      setTimeout(() => dispatch(actions.loadShowsSuccess(items)), 1500)
      // dispatch(actions.loadShowsSuccess(items))
    }).catch(error => {
      console.log(error)
      dispatch(actions.dataLoading(false))
    })
  }
}
