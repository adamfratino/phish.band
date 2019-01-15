import * as contentful from 'contentful'
import * as actions from './shows/actions'

const client = contentful.createClient({
  space: 'ia5jsksmxyiy',
  accessToken: '3a6d99cc3d112f7f2c4079ad5e65399ac7f9eac35f96fab44b501f192498aa20'
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
