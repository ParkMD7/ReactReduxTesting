// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// user files
import App from './components/App';
import reducers from './reducers';


// the empty obj is the initial state for our redux store since we have no backend
ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
