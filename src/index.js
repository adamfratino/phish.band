import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/styles.scss';
import Main from './layouts/Main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <Router>
    <Main />
  </Router>
), document.querySelector('#app'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
