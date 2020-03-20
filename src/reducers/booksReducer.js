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
  FETCH_BOOKS,
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  ADD_BOOKS,
} from '../constants/actionTypes';

// note: remove extra data from initialState after adding fetch functionality
const initialState = {
  isFetching: false,
  books: [
    {
      title: 'swag book!!!',
      author: 'Tim',
      publisher: 'swag corps',
      publishedDate: '2020',
      id: 1,
    },
    {
      title: 'psych rocks',
      author: 'Kelci',
      publisher: 'psych corps',
      publishedDate: '2019',
      id: 2,
    },
  ],
};

// variable to keep track of IDs for added books
let nextId = 0;

function booksReducer(state = initialState, action) {
  switch (action.type) {
    // note: update FETCH_BOOKS, REQUEST_BOOKS, RECEIVE_BOOKS to have fetch functionality
    case FETCH_BOOKS:
      return state;
    case REQUEST_BOOKS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_BOOKS: {
      // add logic to parse through payload before adding the data to state
      const formattedBooks = action.payload.items.map(({ volumeInfo }) => {
        const formattedBook = {
          title: volumeInfo.title, // string
          author: volumeInfo.authors, // array
          publisher: volumeInfo.publisher ? volumeInfo.publisher : 'n/a', // string - if no publisher, return n/a
          publishedDate: volumeInfo.publishedDate, // string
          id: nextId,
        };

        nextId += 1;

        return formattedBook;
      });

      console.log(formattedBooks);

      return {
        ...state,
        isFetching: false,
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
