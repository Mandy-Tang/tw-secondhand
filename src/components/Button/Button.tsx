import * as React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

interface ButtonProps {
    text?: string;
    destination: string;
    disabled?: boolean;
    handleClick?: (e: object) => void;
}

const Button = ({destination, text, disabled = false, handleClick, ...props}: ButtonProps) => (
    <Link to={destination} onClick={handleClick}>
        <button className="button" disabled={disabled}> 
            {text}
        </button>
    </Link>   
);

export default Button;
