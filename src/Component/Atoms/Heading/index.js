import React from 'react';

function Heading(props) {
    return (
        <div className='heading'>
            {props.text}
        </div>
    );
}

export default Heading;