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
        navigate('/search')

    }

    const handleKeyPress = (event)=>
    {
        if(event.key==='Enter')
        {
            // console.log('Đã bấm enter')
            setValue(event.target.value.trim())
            handleSearch()
        }
    }
    const handleHiddenSearch = () =>
    {
        const input_search_group = document.querySelector('.input-search-group')
        const input_search = document.querySelector('.input-search')
        const open = document.querySelector('.open')
        const close = document.querySelector('.close')
        const active = document.querySelector(".active")
        if(active===null)
        {
            open.style.display = "none";
            close.style.display = "block";
            input_search_group.classList.add("active")
            input_search.focus()
        }
        else{
            open.style.display = "block";
            close.style.display = "none";
            input_search_group.classList.remove("active")
        }
    }
    return (
        <>
        <div className='group-icon-header'>
            <div className='input-search-group'>
                <input onKeyPress={(e)=>handleKeyPress(e)} onChange={e => setValue(e.target.value.trim())} className='input-search' placeholder='Search...'/>
                <button onClick={()=> handleSearch()} className='search-btn'><i class="fas fa-search"></i></button>
            </div>


            <button onClick={()=>handleHiddenSearch()} className='search-icon'>
                <i class="open fas fa-search"></i>
                <i class="close fa-solid fa-xmark"></i>
            </button>

            <button onClick={() =>changeURL()} className='cart-icon'>
                <i class="fas fa-shopping-cart"></i>
            </button>
        </div>
        </>
    );
}

export default GroupIcons;