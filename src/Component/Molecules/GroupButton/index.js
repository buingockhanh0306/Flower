import React from 'react';
import { useState } from 'react';
import './style.css'

function GroupButton(props) {
    
    
    return (
        <div className='group-btn'> 
            <div className='btn-item'>
                <button onClick={BlueColor()} className='btn' style={{backgroundColor: 'blue'}}></button>
            </div>
            <div className='btn-item'>
                <button onClick={RedColor()} className='btn' style={{backgroundColor: 'red'}}></button>
            </div>
            <div className='btn-item'>
                <button onClick={PinkColor()} className='btn' style={{backgroundColor: 'pink'}}></button>
            </div>
            <div className='btn-item'>
                <button onClick={OrangeColor()} className='btn' style={{backgroundColor: 'orange'}}></button>
            </div>
        </div>
    );
}

export default GroupButton;