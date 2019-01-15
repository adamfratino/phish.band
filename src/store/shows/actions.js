/**
* Shows Actions
*/

import * as types from './types'

export function loadShowsSuccess(data) {
  return { type: types.LOAD_SHOWS_SUCCESS, data}
}
