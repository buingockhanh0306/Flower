import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

function HeaderChild(props) {
    return (
        <div className='header-child'>
            <span><Link className='link' to='/'>Home</Link> / </span><span className='product'>{props.text}</span>
        </div>
    );
}

export default HeaderChild;