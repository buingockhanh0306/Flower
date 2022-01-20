import React from 'react';
import './style.css'

function HeadingFooter(props) {
    return (
        <div>
            <div className='heading-footer'>
                {props.text}
            </div>
        </div>
    );
}


export default HeadingFooter;