import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './style.css'

function GroupIcons(props) {
    const [value, setValue] = useState('')
    const navigate = useNavigate();
    const changeURL = () => {
        navigate(`/checkout`)
    }
    const handleSearch = ()=>
    {
        localStorage.setItem('search_value', value)
        navigate('/search')

    }
    const handleHiddenSearch = () =>
    {
        const input_search_group = document.querySelector('.input-search-group')
        const active = document.querySelector('.active')
        console.log(active)
        active === null ? input_search_group.classList.add("active"): input_search_group.classList.remove("active")
    }
    return (
        <>
        <div className='group-icon-header'>
            <div className='input-search-group'>
                <input onChange={e => setValue(e.target.value)} className='input-search' placeholder='Tìm kiếm...'/>
                <button onClick={()=> handleSearch()} className='search-btn'><i class="fas fa-search"></i></button>
            </div>
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