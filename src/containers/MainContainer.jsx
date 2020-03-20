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
import * as actions from '../actions/actionCreators';
import SearchBar from '../components/SearchBar';
import FilterableBookList from './FilterableBookList';

function mapStateToProps(state) {
  return {
    searchQuery: state.searchQuery,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editSearchQuery: (event) => dispatch(actions.editSearchQuery(event.target.value)),
    fetchBooks: () => dispatch(actions.fetchBooks()),
  };
}

function MainContainer({ searchQuery, editSearchQuery, fetchBooks }) {
  useEffect(() => {
    fetchBooks();
  });

  return (
    <div>
      <h1>Books</h1>
      <button type="button">
        <Link to="/create">
          Create New Book
        </Link>
      </button>
      <SearchBar searchQuery={searchQuery} editSearchQuery={editSearchQuery} />
      {/* the h2 changes based on whether or not there is a search query */}
      {!searchQuery ? <h2>All Books</h2> : <h2>Search Results</h2>}
      <FilterableBookList />
    </div>
  );
}

MainContainer.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  editSearchQuery: PropTypes.func.isRequired,
  fetchBooks: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
