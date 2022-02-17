import React from 'react';
import './style.css'

function RadioItem(props) {
    return (
        <div className='radio-item'>
            <input checked type='radio' name='radio' />
            <div className='radio-text'>
                <p className='line1'>{props.line1}</p>
                <p className='line2'>{props.line2}</p>
            </div>
            <div className='free'>Free</div>
        </div>
    );
}

export default RadioItem;