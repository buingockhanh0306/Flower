import React from 'react';
import './style.css'

function HeaderChild(props) {
    return (
        <div className='header-child'>
            <span>Home / </span><span className='product'>{props.text}</span>
        </div>
    );
}

export default HeaderChild;