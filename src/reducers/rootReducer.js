/**
 * ************************************
 *
 * @module  rootReducer.js
 * @author Timothy Mai
 * @date 3/17/20
 * @description root reducers (for Redux)
 *
 * ************************************
 */

// import * as types from '../constants/actionTypes';
import { combineReducers } from 'redux';
import booksReducer from './booksReducer';
import searchReducer from './searchReducer';

const reducers = combineReducers({
  booksReducer,
  searchReducer,
});


export default reducers;
