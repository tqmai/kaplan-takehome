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

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editSearchQuery } from '../actions/actionCreators';
import SearchBar from '../components/SearchBar';
import FilterableBookList from './FilterableBookList';

function mapStateToProps(state) {
  return {
    searchQuery: state.searchQuery,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editSearchQuery: (event) => dispatch(editSearchQuery(event.target.value)),
  };
}

function MainContainer({ searchQuery }) {
  return (
    <div>
      <h1>Books</h1>
      <button type="button">Create New Book</button>
      <SearchBar searchQuery={searchQuery} editSearchQuery={editSearchQuery} />
      {/* the h2 changes based on whether or not there is a search query */}
      {!searchQuery ? <h2>All Books</h2> : <h2>Search Results</h2>}
      <FilterableBookList />
    </div>
  );
}

MainContainer.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
