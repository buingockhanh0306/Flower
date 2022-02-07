import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

function NavBar(props) {
    const navigate = useNavigate()
    const changeURL = (path)=>{
        const str = path.slice(1);
        console.log('str',str)
        navigate(path)
        localStorage.setItem('category',str.charAt(0).toUpperCase()+str.slice(1))
    }
    return (
        <div className='navbar'>
            <li onClick={()=>changeURL('/flowers')}>Flower</li>
            <li onClick={()=>changeURL('/plants')}>Plants</li>
            <li onClick={()=>changeURL('/gifts')}>Gifts</li>
            <li onClick={()=>changeURL('/disconts')}>Disconts</li>
            <li onClick={()=>changeURL('/about')}>About us</li>
        </div>
    );
}

export default NavBar;