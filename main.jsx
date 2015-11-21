import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import reducer from './model/reducer-root';
import initialState from './model/initial';
import App from './components/app.jsx';

let store = createStore(reducer, initialState);
if (window) {
  // Expose the store on the global object so we can view it in the console
  window.store = store;
}

// Connect the App instance to the Redux store. The function passed to connect() returns
// the subset of the global state that App should see. This function also has an opportunity
// to perform arbitrary transforms on the global state, but we don't use that functionality here.
function identity(v) {
  return v;
}
let ConnectedApp = connect(identity)(App);

render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('container')
);
