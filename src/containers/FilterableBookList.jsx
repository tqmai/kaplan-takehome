/**
 * ************************************
 *
 * @module  FilterableBookList.jsx
 * @author Timothy Mai
 * @date 3/18/20
 * @description filterable display for books
 *
 * ************************************
 */

import { connect } from 'react-redux';
import BookList from '../components/BookList';

function getVisibleBooks(books, searchQuery) {
  // add logic here to filter the books
  return books;
}

function mapStateToProps(state) {
  return {
    books: getVisibleBooks(state.books, state.searchQuery),
  };
}

// note: there is no mapDispatchToProps because BookList does not need to modify the state
const FilterableBookList = connect(mapStateToProps, null)(BookList);

export default FilterableBookList;
