import * as React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

interface ButtonProps {
    text?: string;
    destination: string;
    disabled?: boolean;
    handleClick?: () => void;
}

const Button = ({disabled = false, handleClick, ...props}: ButtonProps) => (
    <Link to={props.destination} onClick={handleClick}>
        <button className="button" disabled={disabled}> 
            {props.text}
        </button>
    </Link>   
);

export default Button;
