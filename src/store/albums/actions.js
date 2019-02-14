import * as types from './types'

export const loadAlbumsSuccess = (album) => ({
  type: types.LOAD_ALBUMS_SUCCESS,
  album
})
