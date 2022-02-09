import React from 'react';
import GroupSelect from '../../Molecules/GroupSelect';
import './style.css'

function SelectAndCount(props) {
    const count = localStorage.getItem('count')
    console.log('count = ', count)
    return (
        <div className='select-count'>
            <GroupSelect/>
            <div className='count'>{count} items</div>
        </div>
    );
}

export default SelectAndCount;