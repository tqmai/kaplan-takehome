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
import '../stylesheets/Book.scss';

function Book({
  title,
  author,
  publisher,
  publishedDate,
}) {
  // author is an array - format into string
  const formattedAuthors = author.join(', ');

  return (
    <section className="book">
      <h4 className="book__title">{title}</h4>
      <ul className="book_details">
        <li key="author">
          Author:
          {' '}
          {formattedAuthors}
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
    </section>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.arrayOf(PropTypes.string).isRequired,
  publisher: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
};

export default Book;
