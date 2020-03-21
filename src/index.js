/* eslint-disable react/jsx-filename-extension */
/**
 * ************************************
 *
 * @module  index.js
 * @author Timothy Mai
 * @date 3/16/20
 * @description renders application
 *
 * ************************************
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './stylesheets/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
