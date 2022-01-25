import React from 'react';
import './style.css'

function ButtonBlack(props) {
    return (
        <div className='btn'>
            <button onClick={props.handleClick} className='btn-black'>{props.text}</button>
        </div>
    );
}

export default ButtonBlack;