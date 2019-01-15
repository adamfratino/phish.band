/**
* Shows Reducer
*/

import initialState from '../initialState'
import * as types from './types'

export default function showsReducer(state = initialState.data, action) {
  switch (action.type) {
    case types.LOAD_SHOWS_SUCCESS:
      return {
        ...state,
        shows: action.data
      }
    default:
      return state
  }
}
