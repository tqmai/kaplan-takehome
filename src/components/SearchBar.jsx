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
import '../../public/search-black-18dp.svg';

function SearchBar({ searchQuery, editSearchQuery }) {
  return (
    <div>
      <form>
        <div className="search">
          <img src="search-black-18dp.svg" alt="Search icon" />
          <input type="text" placeholder="Search" value={searchQuery} onChange={editSearchQuery} />
        </div>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  editSearchQuery: PropTypes.func.isRequired,
};

export default SearchBar;
