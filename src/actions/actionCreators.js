/**
 * ************************************
 *
 * @module  actionCreators.js
 * @author Timothy Mai
 * @date 3/17/20
 * @description action creators (for Redux)
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

export function fetchBooks(data) {
  return {
    type: types.FETCH_BOOKS,
    payload: data,
  };
}

export function addBooks(bookData) {
  return {
    type: types.ADD_BOOKS,
    payload: bookData,
  };
}

export function editSearchQuery(query) {
  return {
    type: types.EDIT_SEARCH_QUERY,
    payload: query,
  };
}
