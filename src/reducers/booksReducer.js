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

import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  ADD_BOOKS,
} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  booksFetched: false,
  books: [],
};

// variable to keep track of IDs for added books
let nextId = 0;

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_BOOKS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_BOOKS: {
      // logic to parse through payload before adding the data to state
      const formattedBooks = action.payload.items.map(({ volumeInfo }) => {
        const formattedBook = {
          // the following data has conditional statements to account for empty data fields
          title: volumeInfo.title ? volumeInfo.title : 'n/a', // string
          author: Array.isArray(volumeInfo.authors) ? volumeInfo.authors : ['n/a'], // array
          publisher: volumeInfo.publisher ? volumeInfo.publisher : 'n/a', // string - if no publisher, return n/a
          publishedDate: volumeInfo.publishedDate ? volumeInfo.publishedDate : 'n/a', // string
          id: nextId,
        };

        nextId += 1;

        return formattedBook;
      });

      return {
        ...state,
        isFetching: false,
        booksFetched: true,
        books: [
          ...state.books,
          ...formattedBooks,
        ],
      };
    }
    case ADD_BOOKS: {
      // take the new book info and pass an id to it before adding it to the store
      const newBookWithId = {
        ...action.payload,
        id: nextId,
      };

      nextId += 1;

      return {
        ...state,
        books: [
          ...state.books,
          newBookWithId,
        ],
      };
    }
    default:
      return state;
  }
}

export default booksReducer;
