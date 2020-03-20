/* eslint-disable no-console */
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

export function requestBooks() {
  return {
    type: types.REQUEST_BOOKS,
    payload: null,
  };
}

export function receiveBooks(bookData) {
  return {
    type: types.RECEIVE_BOOKS,
    payload: bookData,
  };
}

export function fetchBooks() {
  return (dispatch) => {
    dispatch(requestBooks());

    return fetch('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep')
      .then(
        (response) => response.json(),
        (error) => console.log('error occured', error),
      )
      .then((json) => dispatch(receiveBooks(json)));
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
