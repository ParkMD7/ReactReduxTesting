// dependencies
import React from 'react';
import { mount } from 'enzyme';

// user files
import CommentBox from '../CommentBox';


// the CommentBox Component could/would be likely treated as shallow but for practice purposes has been made with FullDOM
// The FullDOM can interfere with other tests because it shares the JSDOM - vital to unmount and clean up
it('has a text area and a button', ()=> {
  const wrapped = mount(<CommentBox />);

  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})
