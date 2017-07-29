import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import * as D from '../../../definitions';
import { Logo, ProductItem, Button }from '../../../components';

import './HomePage.css';
import {layoutWrapper} from "../../Layout/index";

type HomePageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
    user: D.UserState
};

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
          <ProductItem
            name="iphone 6s"
            price={3000}
            img="http://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-1.jpg"
            status={1}
            buyer="pei"/>
          <ProductItem
            name="iphone 6s"
            price={3000}
            img="http://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-1.jpg"
            status={0}/>
          <ProductItem
            name="iphone 6s"
            price={3000}
            img="http://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-1.jpg"
            status={0}/>
        </div>
    );
};

export default layoutWrapper(connect(
    (state: D.RootState<object>) => ({user: state.user})
)(HomePage));
