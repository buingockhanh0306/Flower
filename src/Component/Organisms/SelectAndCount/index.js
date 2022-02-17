import React from 'react';
import GroupSelect from '../../Molecules/GroupSelect';
import './style.css'

function SelectAndCount(props) {
    return (
        <div className='select-count'>
            <GroupSelect/>
        </div>
    );
}

export default SelectAndCount;