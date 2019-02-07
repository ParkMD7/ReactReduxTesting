// dependencies
import React from 'react';
import { shallow } from 'enzyme'; // allows us to render our just the component and no React children

// user files -> implemented absolute paths
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';



// the beforeEach function will run before each test runs - gives us opportunity to write some shared logic before each tests run
// declare the wrapped variable up here so that it is available to all scopes (instead of declaring it within the AF scope of beforeEach)
let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
})


it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1) // make sure to make tests break 1 time to validate our tests work
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
});
