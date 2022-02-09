import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

function Heading(props) {
    return (
        <Link to="/" className='heading'>
            {props.text}
        </Link>
    );
}

export default Heading;