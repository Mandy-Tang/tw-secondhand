import * as React from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.css';

export interface MenuItemModel {
  id: string;
  icon?: any;
  path?: string;
  type?: string;
}

interface MenuItemProps {
  item?: MenuItemModel;
  selected?: boolean;
}

export class MenuItem extends React.Component<MenuItemProps> {
  constructor(props: MenuItemProps) {
    super(props);
  }

  public render() {
    const styleClass = this.props.item.type === 'tab' ? " menu-item " : "menu-item menu-item-pop ";
    return (
      <li className={this.props.selected ? 'selectedItem' : ''}>
        <Link to={this.props.item.path}>
          <img src={this.props.item.icon} className={styleClass}/>
        </Link>
      </li>);
  }
}
