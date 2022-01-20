import React from 'react';
import './style.css'

function Heading(props) {
    return (
        <div className='heading'>
            {props.text}
        </div>
    );
}

export default Heading;