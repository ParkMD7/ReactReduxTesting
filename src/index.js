// dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// user files
import App from './components/App';
import Root from './Root';

// When our application first starts - it tries to render an instance of the Root Component and the App Component will be passed to Root as a child
ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root')
);
