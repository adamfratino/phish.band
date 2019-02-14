import initialState from '../initialState'
import * as types from './types'

export default (state = initialState.shows, action) => {
  switch (action.type) {
    case types.LOAD_SHOWS_SUCCESS:
      return action.shows
    default:
      return state
  }
}
