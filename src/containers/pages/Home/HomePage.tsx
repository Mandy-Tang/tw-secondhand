import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import * as D from '../../../definitions';
import { userLogin } from '../../../modules/user/actions';
import { Logo, ProductItem, Button, MenuBar }from '../../../components';

import './HomePage.css';

const homeIcon = require('./../../resources/home.svg');
const userIcon = require('./../../resources/person.svg');
const addIcon = require('./../../resources/Very-Basic-Plus-icon.svg');

type HomePageProps<S> = DispatchProp<S> & RouteComponentProps<S> & {
    user: D.UserState
};

const HomePage = (props: HomePageProps<object>) => {
  const menus =[
    {
      id: 'home',
      icon: homeIcon,
      path: ""
    },
    {
      id: 'add',
      icon: addIcon
    },
    {
      id: 'user',
      icon: userIcon,
      path: 'about-us'
    }
    ];
    const { dispatch, user } = props;
    return (
        <div className="App">
            <div className="App-header">
                <Logo />
                <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
                To get started, edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>{user.name ? `User Name: ${user.name}` : 'No User Name.'}</p>

            <button onClick={() => dispatch(userLogin({username: 'admin', password: 'admin'}))}>
                Login and get User Name
            </button>
            <p>
                <Button destination='about-us' text='Go to About Us' />
            </p>
          <ProductItem/>
          <MenuBar items={menus}/>
        </div>
    );
};

export default connect(
    (state: D.RootState<object>) => ({user: state.user})
)(HomePage);
