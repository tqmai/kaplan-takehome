/**
 * ************************************
 *
 * @module  store.js
 * @author Timothy Mai
 * @date 3/18/20
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/rootReducer';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;
