/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 * ************************************
 *
 * @module  CreateBookForm.jsx
 * @author Timothy Mai
 * @date 3/16/20
 * @description container for "create new book" page
 *
 * ************************************
 */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as types from '../actions/actionCreators';

function CreateBookForm({ dispatch }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      title: e.target.title.value,
      author: [e.target.author.value],
      publisher: e.target.publisher.value,
      publishedDate: e.target.publishedDate.value,
    };

    dispatch(types.addBooks(newBook));

    alert('Book added!');
  };

  return (
    <div>
      <h1>Create New Book</h1>
      <button type="button">
        <Link to="/">
          Back
        </Link>
      </button>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input name="title" type="text" />
        </label>
        <br />
        <label>
          Author:
          <input name="author" type="text" />
        </label>
        <br />
        <label>
          Publisher:
          <input name="publisher" type="text" />
        </label>
        <br />
        <label>
          Published Date:
          <input name="publishedDate" type="text" />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

CreateBookForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(CreateBookForm);
