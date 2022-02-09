import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

function GroupIcons(props) {
    const navigate = useNavigate();
    const changeURL = () => {
        navigate(`/checkout`)
    }
    const handleHiddenSearch = () =>
    {
        const input_search = document.querySelector('.input-search')
        input_search.classList.add("active")
    }
    return (
        <>
        <div className='group-icon'>
            <button onClick={()=>handleHiddenSearch()} className='search-icon'>
                <i class="fas fa-search"></i>
            </button>
            <button onClick={() =>changeURL()} className='cart-icon'>
                <i class="fas fa-shopping-cart"></i>
            </button>
        </div>
        </>
    );
}

export default GroupIcons;