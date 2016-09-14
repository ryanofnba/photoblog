import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Router,
  IndexRoute,
  hashHistory
} from 'react-router';
import { Provider } from 'react-redux';

import Main from 'Main';
import Home from 'Home';
const actions = require('actions');
//Redux
const store = require('configureStore').configure();
import firebase from 'app/firebase/';




store.subscribe(() => {
  const state = store.getState();
  console.log('New State', state);
});


firebase.auth().onAuthStateChanged(user => {

});

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
