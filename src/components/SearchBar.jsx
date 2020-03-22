/**
 * ************************************
 *
 * @module  SearchBar.jsx
 * @author Timothy Mai
 * @date 3/16/20
 * @description search bar to filter book results
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/SearchBar.scss';

function SearchBar({ searchQuery, editSearchQuery }) {
  return (
    <div>
      <form>
        <input className="search" type="text" placeholder="Search" value={searchQuery} onChange={editSearchQuery} />
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  editSearchQuery: PropTypes.func.isRequired,
};

export default SearchBar;
