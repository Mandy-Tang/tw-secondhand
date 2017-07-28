import * as React from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.css';
import { isUndefined } from 'util';

export interface MenuItemModel {
  id: string;
  icon?: any;
  path?: string;
}

interface MenuItemProps {
   item?: MenuItemModel;
}

export class MenuItem extends React.Component<MenuItemProps> {
  constructor(props: MenuItemProps) {
    super(props);
  }

  public render() {
    if (!isUndefined(this.props.item.path)) {
      return <li><Link to={this.props.item.path}><img src={this.props.item.icon} className="menu-item"/></Link></li>;
    }
    return <li><button><img src={this.props.item.icon} className="menu-item menu-item-pop"/></button></li>;
  }
}
