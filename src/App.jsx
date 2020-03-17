/**
 * ************************************
 *
 * @module  App.jsx
 * @author Timothy Mai
 * @date 3/16/20
 * @description outer container of app, appended to DOM on #root
 *
 * ************************************
 */

import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import FilterableBookList from './components/FilterableBookList';

function App() {
  const books = [
    {
      title: 'swag book',
      author: 'Tim',
      publisher: 'swag corps',
      publishedDate: '2020',
    },
    {
      title: 'psych rocks',
      author: 'Kelci',
      publisher: 'psych corps',
      publishedDate: '2019',
    },
  ];

  return (
    <div>
      <FilterableBookList books={books} />
    </div>
  );
}

export default App;
