import React from 'react';
import RadioItem from '../../Molecules/RadioItem';
import Heading from '../../Atoms/Heading';
import './style.css'

function CheckOutMethod(props) {
    return (
        <div className='method'>
            <Heading text='Delivery method'/>
            <RadioItem line1='Pick up' line2='Today, pickup is available in 4 stores'/>
            <RadioItem line1='Courier' line2='Tomorrow'/>
        </div>
    );
}

export default CheckOutMethod;