/**
 * ************************************
 *
 * @module  FilterableBookList.jsx
 * @author Timothy Mai
 * @date 3/16/20
 * @description filterable display for books
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function FilterableBookList({ books }) {
  const formattedBooks = books.map(({
    title,
    author,
    publisher,
    publishedDate,
  }) => <Book title={title} author={author} publisher={publisher} publishedDate={publishedDate} />);

  return (
    <div>
      {formattedBooks}
    </div>
  );
}

FilterableBookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default FilterableBookList;
