import * as redux from 'redux';
import thunk from 'redux-thunk';

import {
  announcementsReducer,
  familyReducer,
  authStateReducer,
  authUIDReducer,
  eventReducer
} from 'reducers';

export const configure = (initialState = {}) => {
  const reducer = redux.combineReducers({

  });

  const store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
