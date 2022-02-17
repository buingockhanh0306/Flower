import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './style.css'

function ButtonColor(props) {
    const changeColor=()=>
    {
        localStorage.setItem('idlocal', 3)
        console.log('click...')
    }
    return (
        <div className='btn-color'>

            <button onClick={()=>changeColor()} className='btn-color_item' style={{backgroundColor: "blue"}}></button>
            <button onClick={localStorage.setItem('idLocal', '1')} className='btn-color_item' style={{backgroundColor: "red"}}></button>
            <button onClick={localStorage.setItem('idLocal', '2')} className='btn-color_item' style={{backgroundColor: "pink"}}></button>
            <button onClick={localStorage.setItem('idLocal', '4')} className='btn-color_item' style={{backgroundColor: "orange"}}></button>
        </div>
    );
}

export default ButtonColor;