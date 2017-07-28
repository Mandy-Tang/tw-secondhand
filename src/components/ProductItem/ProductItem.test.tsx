import * as React from 'react'
import {shallow} from 'enzyme';
import ProductItem from './ProductItem'

describe("<ProductItem />", () => {

  test('rendering on sale ProductItem', () => {
    let wrapper = shallow(
      <ProductItem
        name="iphone 6s"
        price={3000}
        img="http://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-1.jpg"
        status={0}
      />);
    expect(wrapper.find('.productItem').length).toBe(1);
    expect(wrapper.hasClass('productItem')).toBe(true);
  });

  test('rendering saled ProductItem', () => {
    let wrapper = shallow(
      <ProductItem
        name="iphone 6s"
        price={3000}
        img="http://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-1.jpg"
        status={1}
        buyer="pei"
      />);
    expect(wrapper.find('span').length).toBe(4);
    expect(wrapper.hasClass('productItem notActive')).toBe(true);
  })
});
