import data from './shows/sagas'
const sagas = [
  data
]
export const initSagas = (sagaMiddleware) =>
  sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware))
