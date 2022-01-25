import React from 'react';
import './style.css'

function ButtonColor(props) {
    return (
        <div className='btn-color'>

            <button className='btn-color_item' style={{backgroundColor: "blue"}}></button>
            <button className='btn-color_item' style={{backgroundColor: "red"}}></button>
            <button className='btn-color_item' style={{backgroundColor: "pink"}}></button>
            <button onClick={props.handleClick} className='btn-color_item' style={{backgroundColor: "orange"}}></button>
        </div>
    );
}

export default ButtonColor;