import React from 'react';
import SelectItem from '../../Atoms/SelectItem';

function GroupSelect(props) {
    return (
        <div className='group-select'>
            <SelectItem text='Group by'/>
            <SelectItem text='Color'/>
            <SelectItem text='Price'/>
            <SelectItem text='Flower type'/>
            <SelectItem text='Occasion'/>
        </div>
    );
}

export default GroupSelect;