import initialState from '../initialState'
import * as types from './types'

export default (state = initialState.show, action) => {
  switch (action.type) {
    case types.LOAD_SHOW_SUCCESS:
      return action.show
    default:
      return state
  }
}
