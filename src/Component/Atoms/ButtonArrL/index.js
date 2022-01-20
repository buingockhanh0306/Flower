import React from 'react';
import './style.css'

function ButtonArrL(props) {
    return (
        <div> 
            <button className='btnL'>
                <i class="fas fa-long-arrow-alt-left"></i>
                <p className='btnL-text'>{props.text}</p>
            </button>
        </div>
    );
}

export default ButtonArrL;