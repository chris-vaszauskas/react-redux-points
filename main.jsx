import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './model/reducers';
import App from './components/app.jsx';

// Create the Redux store with thunk middleware to enable async actions
// TODO some kind of if development check before including redux-immutable-state-invariant
let middleware = [ thunk ];
if (window.location.hostname === 'localhost') {
  middleware.push(require('redux-immutable-state-invariant')());
}
let createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
let store = createStoreWithMiddleware(reducer);
window.store = store;  // expose the store on the global object so we can view it in the console

// Connect the App instance to the Redux store. The function passed to connect() returns
// the subset of the global state that App should see. This function also has an opportunity
// to perform arbitrary transforms on the global state, but we don't use that functionality here.
let ConnectedApp = connect(state => state)(App);

render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('container')
);
