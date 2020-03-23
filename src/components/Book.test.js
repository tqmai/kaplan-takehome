/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/**
 * ************************************
 *
 * @module  Book.test.js
 * @author Timothy Mai
 * @date 3/16/20
 * @description test for Book.jsx
 *
 * ************************************
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book';

it('renders the correct book info', () => {
  const title = 'How to Write Tests';
  const author = ['Tim', 'Kaplan'];
  const publisher = 'Kaplan';
  const publishedDate = '2020';
  const id = 1;

  const container = document.createElement('div');
  ReactDOM.render(<Book
    title={title}
    author={author}
    publisher={publisher}
    publishedDate={publishedDate}
    key={id}
  />, container);

  expect(container.textContent).toMatch('How to Write Tests');
  expect(container.textContent).toMatch('Tim, Kaplan');
  expect(container.textContent).toMatch('Kaplan');
  expect(container.textContent).toMatch('2020');
});
