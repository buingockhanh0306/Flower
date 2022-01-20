import React from 'react';
import './style.css'

function Location(props) {
    return (
        <div className='location'>
            <div className='location-icon'><i class="fas fa-map-marker-alt"></i></div>
            <div className='location-text'>London</div>
        </div>
    );
}

export default Location;