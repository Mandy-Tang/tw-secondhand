import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { MenuBar } from '../../components';
import { RouteComponentProps } from '@types/react-router';
import * as D from '../../definitions';
import Loader from '../../components/Loader';

const homeIcon = require('../../containers/resources/home.svg');
const userIcon = require('../../containers/resources/person.svg');
const addIcon = require('../../containers/resources/Very-Basic-Plus-icon.svg');

type MenuLayoutProp<S> = DispatchProp<S> & RouteComponentProps<S> & {
  user: D.UserState
};

const Layout = ({children, location}) => {
  const menus = [
    {
      id: 'home',
      icon: homeIcon,
      path: '/',
      type: 'tab'
    },
    {
      id: 'add',
      icon: addIcon,
      path: '/release'
    },
    {
      id: 'user',
      icon: userIcon,
      path: '/profile',
      type: 'tab'
    }
  ];

  let selectedIndex = 0;
  menus.map((e, index) => {
    if (e.path === location.pathname) {
      selectedIndex = index;
    }
  })
  return (
    <div className="layoutWrapper">
      <Loader/>
      {children}
      <MenuBar items={menus} selectedIndex={selectedIndex}/>
    </div>
  );
};

const ConnectedLayout = connect((state) => {
  return {location: state.router.location}
})(Layout);

const layoutWrapper = InnerContent => (
  function MenuLayout(props: MenuLayoutProp<Object>) {
    return (
      <ConnectedLayout {...props}>
        <InnerContent {...props}/>
      </ConnectedLayout>
    );
  }
);

export { layoutWrapper };

export default ConnectedLayout;
