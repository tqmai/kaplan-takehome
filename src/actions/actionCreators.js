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
  // return {
  //   type: types.FETCH_BOOKS,
  //   payload: data,
  // };

  return (dispatch) => {
    return fetch('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep')
      .then(
        (response) => response.json(),
        (error) => console.log('error occured', error),
      )
      .then((json) => {
        // add more logic here after determining that fetch works
        console.log(json);
      });
  };
}

export function requestBooks() {
  return {
    type: types.REQUEST_BOOKS,
    payload: null,
  };
}

export function receiveBooks(bookData) {
  return {
    type: types.RECEIVE_BOOKS,
    // payload will need to be modified to get the right data - will get full unfiltered json data
    payload: bookData,
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
