import * as React from 'react';
import { Link } from 'react-router-dom'
import './Button.css'

interface ButtonProps {
    text?: string;
    destination: string;
}

const Button = (props: ButtonProps) => (
    <button className="button">
        <Link to={props.destination}>{props.text}</Link>
    </button>
);

export default Button;
