/**
* Shows Actions
*/

import * as types from './types'

export function loadShowsSuccess(data) {
  return { type: types.LOAD_SHOWS_SUCCESS, data}
}

export function dataLoading(isLoading = true) {
  return { type: types.DATA_LOADING, isLoading}
}

export function loadAlbumsSuccess(data) {
  return {type: types.LOAD_ALBUMS_SUCCESS, data}
}
