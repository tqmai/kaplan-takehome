/**
 * ************************************
 *
 * @module  BookList.jsx
 * @author Timothy Mai
 * @date 3/16/20
 * @description display for books
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BookList({ books }) {
  const formattedBooks = books.map(({
    title,
    author,
    publisher,
    publishedDate,
    id,
  }) => (
    <Book
      title={title}
      author={author}
      publisher={publisher}
      publishedDate={publishedDate}
      key={id}
    />
  ));

  return (
    <div>
      {formattedBooks}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BookList;
