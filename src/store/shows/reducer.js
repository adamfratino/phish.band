/**
* Shows Reducer
*/

import initialState from '../initialState'
import * as types from './types'

export default function showsReducer(state = { shows: initialState.data.shows }, action) {
  switch (action.type) {
    case types.DATA_LOADING:
      return {
        ...state,
        loading: action.isLoading
      }
    case types.LOAD_SHOWS_SUCCESS:
      return {
        ...state,
        shows: action.data,
        loading: false
      }
    default:
      return state
  }
}
