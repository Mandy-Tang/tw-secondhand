import * as React from 'react';

interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => {
  return (
    <div className="Header">
      <h3>{props.title}</h3>
    </div>
  );
};

export default Header;
