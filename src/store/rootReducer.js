import { combineReducers } from 'redux'
import show from './show/reducer'
import shows from './shows/reducer'
import albums from './albums/reducer'

export const rootReducer = combineReducers({
  show: show,
  shows: shows,
  albums: albums
})
