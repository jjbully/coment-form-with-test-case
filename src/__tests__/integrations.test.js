import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install(); //intercept any axios response
  // make a fake request in place of axios and return a fake response and pretend axios made a successful request
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1'}, { name: 'Fetched #2'}]
  });
})

afterEach(() => {
  moxios.uninstall();
})


it('can fetch a list of comments and display them', (done) => {
  // Attempt to render the *entire* app
  const wrapped = mount (
    <Root>
      <App />
    </Root>
  )

  wrapped.find('.fetch-comments').simulate('click');

  moxios.wait(() => {
    wrapped.update()

    expect(wrapped.find('li').length).toEqual(2);

    done()
    wrapped.unmount() 
  })

});