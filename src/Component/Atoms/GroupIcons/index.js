import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

function GroupIcons(props) {
    const navigate = useNavigate();
    const changeURL = () => {
        navigate(`/checkout`)
    }
    return (
        <div className='group-icon'>
            <button className='search-icon'>
                <i class="fas fa-search"></i>
            </button>
            <button onClick={() =>changeURL()} className='search-icon'>
                <i class="fas fa-shopping-cart"></i>
            </button>
        </div>
    );
}

export default GroupIcons;