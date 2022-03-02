import React from 'react';
import './style.css'

function Title(props) {
    return (
        <div>
            <h1 className='title'>All {props.text}</h1>
        </div>
    );
}

export default Title;