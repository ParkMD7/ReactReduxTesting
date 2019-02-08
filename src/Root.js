// dependencies
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

// user files
import reducers from './reducers';


// Anytime we we create an instance of this Root Component - we create an instance of our Provider Tag and store too
// NOTE: props.children is a React ability that lets us pass in Components as props
// This also allows us to pass in .test.js components so that they think they are children of the Provider Component (had been causing tests to fail) -> notice the test components are now wrapped with Root
export default ({children, initialState = {}}) => {
  const store = createStore(reducers, initialState, applyMiddleware(reduxPromise))

  return(
    <Provider store={store}>
      {children}
    </Provider>
  )
}

// NOTE: the 2nd arg to createStore has been changed from an empty obj (our initial application state since we have no backend) to initialState defaulted as an empty obj
// this is so if someone calls Root Component and they don't pass in an initial state we can default that value to be an empty obj
