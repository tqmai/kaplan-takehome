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
import FilterableBookList from '../components/FilterableBookList';

function MainContainer() {
  const books = [
    {
      title: 'swag book',
      author: 'Tim',
      publisher: 'swag corps',
      publishedDate: '2020',
    },
    {
      title: 'psych rocks',
      author: 'Kelci',
      publisher: 'psych corps',
      publishedDate: '2019',
    },
  ];

  return (
    <div>
      <h1>Books</h1>
      <button type="button">Create New Book</button>
      <p>placeholder for search bar</p>
      <h2>All Books</h2>
      {/* update this h2 later when adding search bar */}
      <FilterableBookList books={books} />
    </div>
  );
}

export default MainContainer;
