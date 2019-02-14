import * as types from './types'

export const isLoading = (isLoading = true) => ({
  type: types.IS_LOADING,
  isLoading
})
