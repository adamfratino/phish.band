import * as contentful from 'contentful'
import * as actions from './show/actions'
import * as loading from './loading/actions'

const apiKeys = require('../data/apiKeys.json')

const client = contentful.createClient({
  space: apiKeys.contentful.space,
  accessToken: apiKeys.contentful.accessToken
})

export function loadCurrentShow(date) {
  return dispatch => {
    dispatch(loading.isLoading())
    return client.getEntries({
      content_type: 'book',
      'fields.date': date
    })
    .then(({items}) => {
      const show = Object.values(items).map((object, i) => object.fields)
      setTimeout(() => {
        dispatch(actions.loadShowSuccess(show[0]))
        dispatch(loading.isLoading(false))
      }, 500)

    })
    .catch(error => {
      dispatch(loading.isLoading(false))
    })
  }
}
