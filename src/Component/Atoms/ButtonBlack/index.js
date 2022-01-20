import React from 'react';
import './style.css'

function ButtonBlack(props) {
    return (
        <div className='btn'>
            <button className='btn-black'>{props.text}</button>
        </div>
    );
}

export default ButtonBlack;