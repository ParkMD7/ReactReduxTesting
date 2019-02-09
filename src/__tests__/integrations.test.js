// NOTE: all other testing performed in this application have been UNIT Tests but testing in this file will be INTEGRATION Testing

// NOTE: As it stands now, we can not create AXIOS requests from within the Command Line Enviornment / JEST so our tests will fail because we are not getting a response obj back from our fetch that we can map over in our Reducer
// NOTE: To fix this, we've install MOXIOS to simulate a successful request issued from the Command Line Enviorment


// dependencies
import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

// user files
import Root from '../Root';
import App from '../components/App';


beforeEach(() => {
  // this function call sets up moxios and tells it to intecept any network request axios may try to issue
  moxios.install()
  // this line tells moxios to automatically respond to any axios request and trick it with returned data
  // the first arg is the URL we want to intecept axios from calling and the 2nd arg is the response obj we will use to fool axios
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    // our response was an array of objs that had a name property so that needs to be copied for our reducer
    response: [{ name: 'Test Fetched Comment #1'}, { name: 'Test Fetched Comment #2'}]
  })
})

afterEach(() => {
  moxios.uninstall(); // prevents us from trying to reuse the moxios comments anywhere else in our tests
})

// NOTE: We are not passing any initial state to the Root Component because there is no initial state we want / need to provide to our redux store for this test
// NOTE: The entire purpose of this test is to confirm our application can reach out to the API and fetch a list of comments inself
// NOTE: the CB 'done' will cause the JEST test suite to wait before finally completing until we invoke 'done'
it('can fetch a list of comments and display them', (done) => {
  // Step 1 - we want to Attempt to render the *entire* application
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // Step 2 - we want to find the 'fetchComments' button (added a className onto the component to make that easier) and simulate a click on it
  wrapped.find('.fetch-comments').simulate('click');

  // Step 3A - we want to introduce a pause so that the non-zero time it takes moxios to intercept the axios request and return our fake obj is less than the time it takes the next line of code on 3B to check the # of li's
  moxios.wait(() => {
    // we force our component to update so we have the comments in there
    wrapped.update();
    // Step 3B - we expect to find a list of comments
    expect(wrapped.find('li').length).toEqual(2)
    done();
    wrapped.unmount();
  });
});
