import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './style.css'

function ButtonColor(props) {
    const changeColor=()=>
    {
        console.log('click...')
    }
    return (
        <div className='btn-color'>

            <button onClick={()=>changeColor()} className='btn-color_item' style={{backgroundColor: "blue"}}></button>
            <button className='btn-color_item' style={{backgroundColor: "red"}}></button>
            <button className='btn-color_item' style={{backgroundColor: "pink"}}></button>
            <button className='btn-color_item' style={{backgroundColor: "orange"}}></button>
        </div>
    );
}

export default ButtonColor;