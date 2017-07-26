import * as React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('App shallow renders with initial store', () => {
  const wrapper = shallow(<App />);
  const store = wrapper.props().store.getState();
  expect(store).toBeTruthy();
  expect(store.app).toBeTruthy();
});
