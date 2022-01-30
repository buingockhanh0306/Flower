import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

function NavBar(props) {
    const navigate = useNavigate()
    const changeURL = (path)=>{
        navigate(path)
    }
    return (
        <div className='navbar'>
            <li onClick={()=>changeURL('/allplant')}>Flower</li>
            <li onClick={()=>changeURL('/allplant')}>Plants</li>
            <li onClick={()=>changeURL('/allplant')}>Gifts</li>
            <li onClick={()=>changeURL('/allplant')}>Dicords</li>
            <li onClick={()=>changeURL('/allplant')}>About us</li>
        </div>
    );
}

export default NavBar;