/* eslint-disable no-undef */
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
import SearchBar from '../SearchBar';

it('calls editSearchQuery when user types into input field', () => {
  const editSearchQueryMock = jest.fn();
  const searchQueryMock = '';

  const wrapper = shallow((
    <SearchBar
      searchQuery={searchQueryMock}
      editSearchQuery={editSearchQueryMock}
    />
  ));

  wrapper.find('input').simulate('change', { target: { value: 'a' } });
  wrapper.find('input').simulate('change', { target: { value: 'ab' } });
  expect(editSearchQueryMock).toBeCalledTimes(2);
});
