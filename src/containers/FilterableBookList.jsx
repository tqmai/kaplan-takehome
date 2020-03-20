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

// functionality for filtering books based on search query
function getVisibleBooks(books, searchQuery) {
  // if the title, author, or publisher contains the query, display that book
  function searchFilter({ title, author, publisher }) {
    // make all the strings lowercase to allow for case insensitivity
    const lowercaseQuery = searchQuery.toLowerCase();
    const lowercaseTitle = title.toLowerCase();
    const lowercaseAuthorArr = author.map((auth) => auth.toLowerCase());
    const lowercasePublisher = publisher.toLowerCase();

    // check to see if author contains the search query
    // eslint-disable-next-line arrow-body-style
    const authorContainsQuery = lowercaseAuthorArr.reduce((acc, curAuthor) => {
      return curAuthor.includes(lowercaseQuery);
    }, false);

    return (
      authorContainsQuery
      || lowercaseTitle.includes(lowercaseQuery)
      || lowercasePublisher.includes(lowercaseQuery)
    );
  }

  const validBooks = books.filter(searchFilter);

  return validBooks;
}

function mapStateToProps(state) {
  return {
    books: getVisibleBooks(state.books.books, state.searchQuery),
  };
}

// note: there is no mapDispatchToProps because BookList does not need to modify the state
const FilterableBookList = connect(mapStateToProps, null)(BookList);

export default FilterableBookList;
