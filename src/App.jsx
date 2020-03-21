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
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import CreateBookForm from './containers/CreateBookForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/create">
          <CreateBookForm />
        </Route>
        <Route path="/">
          <MainContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
