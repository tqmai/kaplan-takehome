/**
 * ************************************
 *
 * @module  booksReducer.js
 * @author Timothy Mai
 * @date 3/18/20
 * @description books reducers (for Redux)
 *
 * ************************************
 */

import { FETCH_BOOKS, ADD_BOOKS } from '../constants/actionTypes';

// note: remove extra data from initialState after adding fetch functionality
const booksArray = [
  {
    title: 'swag book!!!',
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
];

// you could actually just make booksArray be an empty array after you remove the extra data
function booksReducer(state = booksArray, action) {
  switch (action.type) {
    // note: update FETCH_BOOKS to have fetch functionality
    case FETCH_BOOKS:
      return state;
    case ADD_BOOKS:
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
}

export default booksReducer;
