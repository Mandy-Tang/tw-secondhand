import * as React from 'react';
import { shallow } from 'enzyme';
import { MenuItem } from './MenuItem'

const homeIcon = require('./../MenuBar/home.svg');

it('MenuItem shallow renders with path', () => {
  const menu = {
      id: 'home',
      icon: homeIcon,
      path: "test_path"
    };
  const wrapper = shallow(<MenuItem item={menu}/>);

  expect(wrapper.find('.menu-item').length).toBe(1);
});
