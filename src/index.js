import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routers/Router'
import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';

// Redux Store
import { Provider } from 'react-redux'
import { configureStore } from './store'
import { loadShows } from './store/Shows'

const store = configureStore()
store.dispatch(loadShows())

ReactDOM.render((
  <Provider store={store}>
    <Router />
  </Provider>
), document.querySelector('#app'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
