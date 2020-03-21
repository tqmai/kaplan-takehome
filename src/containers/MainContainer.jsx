/**
 * ************************************
 *
 * @module  MainContainer.jsx
 * @author Timothy Mai
 * @date 3/16/20
 * @description main container for app
 *
 * ************************************
 */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../stylesheets/MainContainer.scss';
import * as actions from '../actions/actionCreators';
import SearchBar from '../components/SearchBar';
import FilterableBookList from './FilterableBookList';

function mapStateToProps(state) {
  return {
    searchQuery: state.searchQuery,
    booksFetched: state.books.booksFetched,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editSearchQuery: (event) => dispatch(actions.editSearchQuery(event.target.value)),
    fetchBooks: () => dispatch(actions.fetchBooks()),
  };
}

function MainContainer({
  searchQuery,
  booksFetched,
  editSearchQuery,
  fetchBooks,
}) {
  // fetches the books from the Google API only one time
  useEffect(() => {
    if (!booksFetched) {
      fetchBooks();
    }
  });

  return (
    <div className="app">
      <header className="header">
        <h1>Books</h1>
        <Link to="/create">
          <button type="button" className="header__button">
            Create New Book
          </button>
        </Link>
      </header>
      <section>
        <SearchBar searchQuery={searchQuery} editSearchQuery={editSearchQuery} />
      </section>
      <main>
        {!searchQuery ? <h2>All Books</h2> : <h2>Search Results</h2>}
        <FilterableBookList />
      </main>
    </div>
  );
}

MainContainer.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  booksFetched: PropTypes.bool.isRequired,
  editSearchQuery: PropTypes.func.isRequired,
  fetchBooks: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
