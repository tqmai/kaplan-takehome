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
import logo from './logo.svg';
import './App.css';
import Book from './components/Book';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <Book />
    </div>
  );
}

export default App;
