// NOTE: the CommentBox Component could/would be likely treated as shallow but for practice purposes has been made with FullDOM
// The FullDOM can interfere with other tests because it shares the JSDOM - vital to unmount and clean up

// dependencies
import React from 'react';
import { mount } from 'enzyme';

// user files
import CommentBox from '../CommentBox';


let wrapped;

// initialize component
beforeEach(()=> { wrapped = mount(<CommentBox />) });

// cleanup component after
afterEach(() => { wrapped.unmount() });

// this test is checking to see if an instance of the CommentBox Component (wrapped) can find a certain HTML element within itself
it('has a text area and a button', ()=> {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
});


// NOTE: enzyme describe() function can be used to group together certain sets of tests in a file with shared behavior - here we've extracted functionality from similar tests and grouped them together
// this function can also limit the scope of beforeEach statements
describe('the text area', ()=> {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    wrapped.update();
  })

// this test will find the textarea element, simulate an onChange event, provide a fake event obj, force the component to update & re-render itself, and finally assert that the textareas value has changed
// NOTE: the simulate method from enzyme allows us to simulate a given event(1st arg is the name of the event trying to be simulated - here is the HTML event name 'change', 2nd arg is refered to as a 'mock obj' that will be merged with the real event obj passed to our event handler)
// NOTE: components re-render async after setState is called so we force the component to re-render with the enzyme method update
// NOTE: we want to make sure our textarea recieved the correct 'value' prop -> this will retrieve the string we passed in
it('has a text area that users can type in', () => {
  // wrapped.find('textarea').simulate('change', {
  //   target: { value: 'new comment' } // this obj will get passed into our event handler on CommentBox as the event arguement
  // });
  // wrapped.update();
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
});


// this test will enter some text into the textarea, simulate a submit event for the form, and verify that the textarea is emptied after form submission
it('has a text area that is emptied after user submits the form', ()=> {
  // wrapped.find('textarea').simulate('change', {
  //   target: { value: 'new comment' }
  // });
  // wrapped.update();
  wrapped.find('form').simulate('submit');
  wrapped.update(); // setState is aysnc so we need to force our wrapped component to re-render and update (new update should lead to an empty string)
  expect(wrapped.find('textarea').prop('value')).toEqual('')
})


})
