import React from 'react';
import './style.css'

function Dropdown(props) {
    return (
            <div className='dropdown-item'>{props.item}</div>           
    );
}

export default Dropdown;