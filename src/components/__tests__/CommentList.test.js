// dependencies
import React from 'react';
import { mount } from 'enzyme';

// user files
import CommentList from '../CommentList';
import Root from '../../Root';


// delcare variable that can be accessed inside function scope
let wrapped;

// initialize component wrapped in a Root Component which causes it to think it's a part of a redux application
beforeEach(()=> {
  // NOTE: when we use the redux createStore function, the 2nd arg (as shown in the Root.js file) is an initial application state
  // we can, for testing purposes, set up and pass in an initial state obj as a prop to the Root Component
  const initialState = {
    comments: ['Comment #1', 'Comment #2']
  }

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
});

// cleanup component after
afterEach(() => { wrapped.unmount() });


// NOTE: the goal of this test is to make sure exactly 1 li shows up per comment
it('creates one LI per comment', () => {
  // console.log(wrapped.find('li').length) // logs '2' into the terminal so we know that the initialState comments we are passing in are showing up correctly
  expect(wrapped.find('li').length).toEqual(2)
})


// NOTE: the goal of this test is to make sure the text of the li is what we think it should be
it('shows the correct text for each comment', () => {
  // console.log(wrapped.render().text())
  expect(wrapped.render().text()).toContain('Comment #1')
  expect(wrapped.render().text()).toContain('Comment #2')
})
