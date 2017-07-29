import * as React from 'react'
import {shallow} from 'enzyme'
import ProductList from './index'

describe('<Productlist/>', () => {
  it('should render multiple productItems', () => {
    const productItems = [
      {
        name: "iphone 6s",
        price: 3000,
        img: "http://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-1.jpg",
        status: 1,
        buyer: "pei",
      },
      {
        name: "iphone 6s",
        price: 3000,
        img: "http://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-1.jpg",
        status: 0,
        buyer: "pei",
      },
      {
        name: "iphone 6s",
        price: 3000,
        img: "http://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-1.jpg",
        status: 1,
        buyer: "pei",
      }
    ]
    const wrapper = shallow(<ProductList items={productItems}/>);

    expect(wrapper.children().length).toBe(3);
  })
})
