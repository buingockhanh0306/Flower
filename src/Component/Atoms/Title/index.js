import React from 'react';
import './style.css'

function Title(props) {
    const category = localStorage.getItem('category')
    return (
        <div>
            <h1 className='title'>All {category}</h1>
        </div>
    );
}

export default Title;