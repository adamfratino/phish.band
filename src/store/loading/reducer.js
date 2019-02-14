import initialState from '../initialState'
import * as types from './types'

export default (state = initialState.loading, action) => {
  switch (action.type) {
    case types.IS_LOADING:
      return action.isLoading
    default:
      return state
  }
}
