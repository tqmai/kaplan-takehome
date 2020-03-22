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
import '../stylesheets/CreateBookForm.scss';
import * as types from '../actions/actionCreators';

function CreateBookForm({ dispatch }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      // the following data has conditional statements to account for empty data fields
      title: e.target.title.value ? e.target.title.value : 'n/a',
      author: e.target.author.value ? [e.target.author.value] : ['n/a'],
      publisher: e.target.publisher.value ? e.target.publisher.value : 'n/a',
      publishedDate: e.target.publishedDate.value ? e.target.publishedDate.value : 'n/a',
    };

    dispatch(types.addBooks(newBook));

    alert('Book added!');
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Create New Book</h1>
        <Link to="/">
          <button type="button" className="header__backButton">
            Back
          </button>
        </Link>
      </header>
      <form onSubmit={handleSubmit} className="form">
        <h4>Title:</h4>
        <label>
          <input name="title" type="text" />
        </label>
        <br />
        <h4>Author:</h4>
        <label>
          <input name="author" type="text" />
        </label>
        <br />
        <h4>Publisher:</h4>
        <label>
          <input name="publisher" type="text" />
        </label>
        <br />
        <h4>Published Date:</h4>
        <label>
          <input name="publishedDate" type="text" />
        </label>
        <br />
        <input className="form__submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

CreateBookForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(CreateBookForm);
