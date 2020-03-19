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

function CreateBookForm() {
  return (
    <div>
      <h1>Create New Book</h1>
      <button type="button">Back</button>
      <form>
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

export default CreateBookForm;
