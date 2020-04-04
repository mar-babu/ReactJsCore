import React from 'react';

// import './button.style.css';


const Button = props => (
    <button className='button' {...props}>
        {props.children}
    </button>
);

export default Button;