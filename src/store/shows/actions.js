import * as types from './types'

export const loadShowsSuccess = (shows) => ({
  type: types.LOAD_SHOWS_SUCCESS,
  shows
})
