import initialState from '../initialState'
import * as types from './types'

export default (state = initialState.albums, action) => {
  switch (action.type) {
    case types.LOAD_ALBUMS_SUCCESS:
      return action.albums
    default:
      return state
  }
}
