import * as React from 'react';
import { shallow } from 'enzyme';
import { MenuBar } from './MenuBar';

const homeIcon = require('./home.svg');

it('MenuBar shallow renders', () => {
  const menus =[
    {
      id: 'home',
      icon: homeIcon,
      path: ""
    },
  ];
  const wrapper = shallow(<MenuBar items={menus}/>);

  expect(wrapper.find('.menu-parent').length).toBe(1);
});
