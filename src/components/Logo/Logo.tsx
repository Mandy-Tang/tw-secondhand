import * as React from 'react';
import './Logo.css';

const logoImg = require('./logo.png');

interface LogoProps {
   logoImg?: string;
}

export default (props: LogoProps) => (
    <img src={props.logoImg || logoImg} className="App-logo" alt="logo" />
);
