import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import * as D from '../../../definitions';
import { Logo, Button }from '../../../components';

import './HomePage.css';
import {layoutWrapper} from "../../Layout/index";
import ProductList from "../../../components/ProductList/index";

type HomePageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
    user: D.UserState
};

const productItems = [
  {
    name:"iphone 6s",
    price:3000,
    img:"http://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-1.jpg",
    status:1,
    buyer:"pei",
  },
  {
    name:"iphone 6s",
    price:3000,
    img:"http://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-1.jpg",
    status:0,
    buyer:"pei",
  },
  {
    name:"iphone 6s",
    price:3000,
    img:"http://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-1.jpg",
    status:1,
    buyer:"pei",
  }
]

const HomePage = (props: HomePageProps<object>) => {
    return (
        <div className="App">
            <div className="App-header">
                <Logo />
                <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
                To get started, edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
                <Button destination='about-us' text='Go to About Us' />
            </p>
          <ProductList items={productItems}/>
        </div>
    );
};

export default layoutWrapper(connect(
    (state: D.RootState<object>) => ({user: state.user})
)(HomePage));
