import React from 'react';
import Heading from '../../Atoms/Heading';
import SelectCheckOut from '../../Atoms/SelectCheckOut';
import './style.css'

function DateTime(props) {
    return (
        <div className='checkout-address datetime'>
        <Heading text = 'Date & Time'/>
        <div className='select'>
            <SelectCheckOut text='Tomorrow, 22.9'/>
            <SelectCheckOut text='8:00 - 22:00'/>
        </div>
    </div>
    );
}

export default DateTime;