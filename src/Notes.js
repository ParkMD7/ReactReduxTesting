// NOTE: How to Test: Build a reproducable testing framework
// Step 1: Look @ each individual part of the application
// Step 2: Imagine telling a friend 'here's what this pice of code does
// Step 3: Write a test to verify each part does what you expect



// Part 1 of Testing For App -> How Stuff works
// dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// user files
import App from '../App';

// NOTE:1 the it function -> global function so we don't have to import it anywhere
// 1 - the it function organizes all tests and call the function 1 time
// 1 - First arg is a string that is a description of the test we're running - just for us
// 1- Second Arg is the stuff to do when this test runs (actual logic)

// the it here refers to an instance of the App Component -> the App Component (it) shows a comment box
it('shows a comment box', () => {
  // NOTE:2 JEST only runs in the command line enviornment
  // 2 - we're not actually creating a 'div' here - it's a fake div that exists inside memory inside the terminal but it fools React to make it think it's working inside a browser
  const div = document.createElement('div');
  // 2 - this document obj is automatically given to us by JSDOM -> we're now trying to render the App instance inside that div floating around in the terminal. (sticks html into div element)
  ReactDOM.render(<App />, div);
  // 2 - After that happens - we have time to write some code to inspect that div element to see if our comment box component is in there
  // console.log(div.innerHTML) // returns App Component innerHTML in the terminal after running npm run test

  // NOTE:4 This is an expectation - these are core to testing and each one leads off with the expect funtion (globally available so we don't have to import)
  // 4 - We want to make sure the tests we write avoid containing knowledge of the inner workings of other components
  // 4 - So we npm install enzyme so we can write tests that better mirror how React works
  // 4 - First argument of an expectation is the thing we are trying to verify
  // 4 - We then write a 'Matcher Statement' (below is .toContain) to modify how we expect our expectation to behave
  // 4 - Finally we add what we want it to be at the end (note though not all expectations have values)
  expect(div.innerHTML).toContain('Comment Box') // want this to match


  // NOTE:3 This function looks at the div, finds the App Component just rendered into it - and then removes it entirely
  // 3 - This is cleanup after our tests run - if we didn't cleanup then it would sit around forever in memory and bog down app speed
  ReactDOM.unmountComponentAtNode(div);
});
