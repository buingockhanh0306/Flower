import React from 'react';
import './style.css'

function SelectItem(props) {
    return (
        <div className='select-item'>
            <span className='select-text'>{props.text}</span>
            <div className='arrow-icon'><i className="fas fa-caret-down"></i></div>
        </div>
    );
}

export default SelectItem;