import { combineReducers } from 'redux'
import shows from './shows/reducer'
import albums from './albums/reducer'

export const rootReducer = combineReducers({
  shows: shows,
  albums: albums
})
