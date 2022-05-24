import React from 'react';
import './style.css'

function PlusItem(props) {
    return (
        <div className='plus-item'>
            <div className='item-content'>
                <span className='item-text'>{props.text}</span>
                <div className='plus-icon'><i className="fas fa-plus"></i></div>
            </div>
            <div className='line'></div>
        </div>
    );
}

export default PlusItem;