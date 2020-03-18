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

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/rootReducer';

// if we're adding middleware later, read this article to see how to add them:
// https://github.com/zalmoxisus/redux-devtools-extension
const store = createStore(reducers, composeWithDevTools());

export default store;
