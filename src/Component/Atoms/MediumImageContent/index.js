import React from 'react';
import './style.css'

function MediumImageContent(props) {
    return (
        <div className='medium-content'>
            <span className='medium-title'>{props.title}</span>
            <span className='medium-desc'>{props.desc}</span>
            <a className='medium-btn'>
                View now
                <i class="arr fas fa-long-arrow-alt-right"></i>
            </a>
        </div>
    );
}

export default MediumImageContent;