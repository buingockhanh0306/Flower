import React from 'react';
import './style.css'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function HeaderCard(props) {

    return (
        <div className='header-card'>
            <span><Link className='link' to='/'>Home</Link> / All Flower / </span><span className='product'>{props.text}</span>
        </div>
    );
}

export default HeaderCard;