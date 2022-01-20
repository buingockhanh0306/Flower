import React from 'react';
import './style.css'

function GroupIcons(props) {
    return (
        <div className='group-icon'>
            <div className='search-icon'>
                <i class="fas fa-search"></i>
            </div>
            <div>
                <i class="fas fa-shopping-cart"></i>
            </div>
        </div>
    );
}

export default GroupIcons;