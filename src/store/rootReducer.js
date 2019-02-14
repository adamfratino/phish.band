import { combineReducers } from 'redux'
import loading from './loading/reducer'
import show from './show/reducer'
import shows from './shows/reducer'
import albums from './albums/reducer'

export const rootReducer = combineReducers({
  loading: loading,
  show: show,
  shows: shows,
  albums: albums
})
