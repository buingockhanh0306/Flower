import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

function MediumImageContent(props) {
    return (
        <div className='medium-content'>
            <span className='medium-title'>{props.title}</span>
            <span className='medium-desc'>{props.desc}</span>
            <Link to ={props.toLink} className='medium-btn'>
                View now
                <i className="arr fas fa-long-arrow-alt-right"></i>
            </Link>
        </div>
    );
}

export default MediumImageContent;