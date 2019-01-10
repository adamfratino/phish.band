import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.querySelector('header'))
ReactDOM.render(<Main />, document.querySelector('main'))
ReactDOM.render(<Footer />, document.querySelector('footer'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
