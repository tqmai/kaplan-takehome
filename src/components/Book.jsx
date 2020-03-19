/**
 * ************************************
 *
 * @module  Book.jsx
 * @author Timothy Mai
 * @date 3/16/20
 * @description displays info for a book
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types';

function Book({
  title,
  author,
  publisher,
  publishedDate,
}) {
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        <li key="author">
          Author:
          {' '}
          {author}
        </li>
        <li key="publisher">
          Publisher:
          {' '}
          {publisher}
        </li>
        <li key="publishedDate">
          Published Date:
          {' '}
          {publishedDate}
        </li>
      </ul>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
};

export default Book;
