/**
 * ************************************
 *
 * @module  FilterableBookList.jsx
 * @author Timothy Mai
 * @date 3/18/20
 * @description filterable display for books
 *
 * ************************************
 */

import React from 'react';
import { connect } from 'react-redux';
import BookList from '../components/BookList';

const FilterableBookList = connect(null, null)(BookList);

export default FilterableBookList;
