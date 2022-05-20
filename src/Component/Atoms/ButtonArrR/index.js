import React from 'react';
import './style.css'

function ButtonArrR(props) {
    return (
        <div> 
            <button className='btnR'>
                <p className='btnR-text'>{props.text}</p>
                <i className="fas fa-long-arrow-alt-right"></i>
            </button>
        </div>
    );
}

export default ButtonArrR;