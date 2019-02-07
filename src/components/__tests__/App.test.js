// dependencies
import React from 'react';
import { shallow } from 'enzyme'; // allows us to render our just the component and no React children

// user files -> implemented absolute paths
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';


it('shows a comment box', () => {
  // terminology means our component is a wrapped version of our component w/ added functionality
  const wrapped = shallow(<App />);
  // .find returns an array of every instance of comment box found (should be 1 or 0 for our setup)
  // .toEqual is the 'Matcher' here
  expect(wrapped.find(CommentBox).length).toEqual(1) // make sure to make tests break 1 time to validate our tests work
});

it('shows a comment list', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentList).length).toEqual(1)
});
