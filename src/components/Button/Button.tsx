import * as React from 'react';
import { Link } from 'react-router-dom'
import './Button.css'

interface ButtonProps {
    text?: string;
    destination: string;
    disabled?: boolean;
}

const Button = ({disabled = false, ...props}: ButtonProps) => (
    <Link to={props.destination}>
        <button className="button" disabled={disabled}>
            {props.text}
        </button>
    </Link>   
)

export default Button;
