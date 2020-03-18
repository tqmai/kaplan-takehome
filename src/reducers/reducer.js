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

// remove extra data from initialState after adding fetch functionality
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

// update FETCH_BOOKS to have fetch functionality
function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_BOOKS:
      return state;
    case types.ADD_BOOKS:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload,
        ],
      };
    case types.EDIT_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
