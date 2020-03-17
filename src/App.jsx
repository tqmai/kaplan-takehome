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
import MainContainer from './containers/MainContainer';

function App() {
  return (
    <div>
      <MainContainer />
    </div>
  );
}

export default App;
