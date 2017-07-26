import * as React from 'react';
import './Logo.css';

const logo = require('./logo.svg');

interface LogoProps {
   logo?: string;
}

export default (props: LogoProps) => (
    <img src={props.logo || logo} className="App-logo" alt="logo" />
);
