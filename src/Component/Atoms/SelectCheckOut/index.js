import React from 'react';
import './style.css'

function SelectCheckOut(props) {
    return (
        <div className='select-checkout'>
            <p>{props.text}</p>
            <i className="fas fa-caret-down"></i>
        </div>
    );
}

export default SelectCheckOut;