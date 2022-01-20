import React from 'react';
import './style.css'

function NumStep(props) {
    return (
        <div style={props.bgr} className='num-checkout'>
            {props.number}
        </div>
    );
}

export default NumStep;