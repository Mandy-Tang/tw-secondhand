import * as React from 'react'

interface HeaderProps {
  title: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <div className="Header">
      <h3>{props.title}</h3>
    </div>
  );
};


