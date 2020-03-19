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
import PropTypes from 'prop-types';
import * as types from '../actions/actionCreators';

function CreateBookForm({ dispatch }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      title: e.target.title.value,
      author: e.target.author.value,
      publisher: e.target.publisher.value,
      publishedDate: e.target.publishedDate.value,
    };

    dispatch(types.addBooks(newBook));
  };

  return (
    <div>
      <h1>Create New Book</h1>
      <button type="button">Back</button>
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

// because I'm calling connect without arguments,
// this component will not re-render with state changes
// might cause problems later - check on this later
export default connect()(CreateBookForm);
