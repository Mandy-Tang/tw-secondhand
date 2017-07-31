import * as React from 'react';
import { connect } from 'react-redux';
import { MenuBar } from '../../components';

const homeIcon = require('../../containers/resources/home.svg');
const userIcon = require('../../containers/resources/person.svg');
const addIcon = require('../../containers/resources/Very-Basic-Plus-icon.svg');

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
      path: 'about-us'
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
  function MenuLayout(props) {
    return (
      <ConnectedLayout {...props}>
        <InnerContent {...props}/>
      </ConnectedLayout>
    );
  }
);

export {layoutWrapper};

export default ConnectedLayout;
