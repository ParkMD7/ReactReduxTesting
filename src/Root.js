// dependencies
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// user files
import reducers from './reducers';


// Anytime we we create an instance of this Root Component - we create an instance of our Provider Tag and store too
// NOTE: props.children is a React ability that lets us pass in Components as props
// This also allows us to pass in .test.js components so that they think they are children of the Provider Component (had been causing tests to fail) -> notice the test components are now wrapped with Root
export default (props) => {
  return(
    <Provider store={createStore(reducers, {})}>
      {props.children}
    </Provider>
  )
}

// the empty obj is the initial state for our redux store since we have no backend
