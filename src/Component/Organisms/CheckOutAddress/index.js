import React from 'react';
import Heading from '../../Atoms/Heading';
import SelectCheckOut from '../../Atoms/SelectCheckOut';
import './style.css'

function CheckOutAddress(props) {
    return (
        <div className='checkout-address'>
            <Heading text = 'Delivery address'/>
            <div className='select'>
                <SelectCheckOut text='London'/>
                <div className='select-checkout address'>
                    12 Maribary, 23b
                </div>
            </div>
        </div>
    );
}

export default CheckOutAddress;