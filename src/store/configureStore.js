import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import showsReducer from '../reducers/shows'
import albumsReducer from '../reducers/albums'


export default () => {
  const store = createStore(
    combineReducers({
      shows: showsReducer,
      albums: albumsReducer
    }),
    composeWithDevTools(
      applyMiddleware(
        thunk,
        reduxImmutableStateInvariant()
      )
    )
  )

  return store
}
