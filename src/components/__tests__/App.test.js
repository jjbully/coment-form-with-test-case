import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped; //initiate here because of the scope of the function

beforeEach(() => {
  wrapped = shallow( < App / > );
});
// https: //jestjs.io/docs/en/setup-teardown.html

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
  //https: //airbnb.io/enzyme/docs/api/ShallowWrapper/find.html
})

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1); //'find' is a array function
})