import * as React from 'react';
import { MenuItemModel, MenuItem } from '../MenuItem/MenuItem';
import './MenuBar.css';

interface MenuProps {
  items?: MenuItemModel[];
}

export class MenuBar extends React.Component<MenuProps> {
  constructor(props: MenuProps) {
    super(props);
  }

  public render() {
    const items = this.props.items;
    let menus = [];
    items.forEach((item) => {
      menus.push(<MenuItem key={item.id} item={item} />);
    });
    return <ul className="menu-parent">{menus}</ul>;
  }
}
