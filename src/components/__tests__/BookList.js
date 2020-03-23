/* eslint-disable react/jsx-filename-extension */
/**
 * ************************************
 *
 * @module  BookList.js
 * @author Timothy Mai
 * @date 3/21/20
 * @description test for BookList.jsx
 *
 * ************************************
 */

import React from 'react';
import { shallow } from 'enzyme';
import BookList from '../BookList';
import Book from '../Book';

it('renders the correct books', () => {
  const books = [
    {
      title: 'How to Write Tests',
      author: ['Tim', 'Kaplan'],
      publisher: 'Kaplan',
      publishedDate: '2020',
      id: 1,
    },
    {
      title: 'Getting a Job at Kaplan',
      author: ['Kaplan'],
      publisher: 'Kaplan',
      publishedDate: '2020',
      id: 2,
    },
  ];

  const wrapper = shallow(<BookList books={books} />);

  expect(wrapper.find(Book)).toHaveLength(2);

  expect(wrapper.contains([<Book
    title={books[0].title}
    author={books[0].author}
    publisher={books[0].publisher}
    publishedDate={books[0].publishedDate}
    key={books[0].id}
  />,
    <Book
      title={books[1].title}
      author={books[1].author}
      publisher={books[1].publisher}
      publishedDate={books[1].publishedDate}
      key={books[1].id}
    />,
  ])).toEqual(true);
});
