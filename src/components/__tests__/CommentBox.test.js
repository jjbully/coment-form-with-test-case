import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
  <Root>
    <CommentBox />
  </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and 2 button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

// https://airbnb.io/enzyme/docs/api/mount.html


describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    wrapped.update();
  })

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('when from is submitted, text area gets emptied', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});


// https://airbnb.io/enzyme/docs/api/ReactWrapper/simulate.html
// https://airbnb.io/enzyme/docs/api/ShallowWrapper/update.html
// https://airbnb.io/enzyme/docs/api/ReactWrapper/prop.html