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
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';

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
      <SearchBar />
      <h2>All Books</h2>
      {/* update this h2 later when adding search bar */}
      <BookList books={books} />
    </div>
  );
}

export default MainContainer;
