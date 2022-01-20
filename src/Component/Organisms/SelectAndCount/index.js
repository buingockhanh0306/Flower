import React from 'react';
import GroupSelect from '../../Molecules/GroupSelect';
import './style.css'

function SelectAndCount(props) {
    return (
        <div className='select-count'>
            <GroupSelect/>
            <div className='count'>24 items</div>
        </div>
    );
}

export default SelectAndCount;