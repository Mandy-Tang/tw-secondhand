import * as React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

it('Button shallow renders with text', () => {
  const buttonText = 'test';  
  const buttonDestination = 'test';
  const wrapper = shallow(<Button destination={buttonDestination} text={buttonText}/>);

  expect(wrapper.find('.button').length).toEqual(1);
});
