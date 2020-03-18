/**
 * ************************************
 *
 * @module  searchReducer.js
 * @author Timothy Mai
 * @date 3/18/20
 * @description reducers (for Redux)
 *
 * ************************************
 */

import { EDIT_SEARCH_QUERY } from '../constants/actionTypes';

// note: inital state for search query is an empty string
function searchReducer(state = '', action) {
  switch (action.type) {
    case EDIT_SEARCH_QUERY:
      return action.payload;
    default:
      return state;
  }
}

export default searchReducer;
