/**
 * ************************************
 *
 * @module  reducer.js
 * @author Timothy Mai
 * @date 3/17/20
 * @description reducers (for Redux)
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

/*
// fetch book data
export const FETCH_BOOKS = 'FETCH_BOOKS';

// add new book data
export const ADD_BOOKS = 'ADD_BOOKS';

// edit search query
export const EDIT_SEARCH_QUERY = 'EDIT_SEARCH_QUERY';
*/

const initialState = {
  books: [
    {
      title: 'swag book',
      author: 'Tim',
      publisher: 'swag corps',
      publishedDate: '2020',
    },
    {
      title: 'psych rocks',
      author: 'Kelci',
      publisher: 'psych corps',
      publishedDate: '2019',
    },
  ],
  searchQuery: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_BOOKS:
      return state;
    case types.ADD_BOOKS:
      return state;
    case types.EDIT_SEARCH_QUERY:
      return state;
    default:
      return state;
  }
}

export default reducer;
