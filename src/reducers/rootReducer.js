/**
 * ************************************
 *
 * @module  rootReducer.js
 * @author Timothy Mai
 * @date 3/17/20
 * @description root reducer (for Redux)
 *
 * ************************************
 */

import { combineReducers } from 'redux';
import booksReducer from './booksReducer';
import searchReducer from './searchReducer';

const reducers = combineReducers({
  books: booksReducer,
  searchQuery: searchReducer,
});

export default reducers;
