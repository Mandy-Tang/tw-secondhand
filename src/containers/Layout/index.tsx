import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { MenuBar } from '../../components';
import { RouteComponentProps } from '@types/react-router';
import * as D from '../../definitions';
const homeIcon = require('../../containers/resources/home.svg');
const userIcon = require('../../containers/resources/person.svg');
const addIcon = require('../../containers/resources/Very-Basic-Plus-icon.svg');

type MenuLayoutProp<S> = DispatchProp<S> & RouteComponentProps<S> & {
  user: D.UserState
};

const Layout = ({ children }) => {
  const menus = [
    {
      id: 'home',
      icon: homeIcon,
      path: ''
    },
    {
      id: 'add',
      icon: addIcon
    },
    {
      id: 'user',
      icon: userIcon,
      path: 'profile'
    }
  ];
  return (
    <div className="layoutWrapper">
      {children}
      <MenuBar items={menus}/>
    </div>
  );
};

const ConnectedLayout = connect()(Layout);

const layoutWrapper = InnerContent => (
  function MenuLayout(props: MenuLayoutProp<Object>) {
    return (
      <ConnectedLayout {...props}>
        <InnerContent {...props}/>
      </ConnectedLayout>
    );
  }
);

export {layoutWrapper};

export default ConnectedLayout;
