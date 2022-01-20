import React, {Component} from 'react';
import Location from '../../Atoms/Location';
import Heading from '../../Atoms/Heading';
import GroupIcons from '../../Atoms/GroupIcons';
import './style.css'

function Header(props) {
    return (
        <div className='header'>
            <Location/>
            <Heading text = 'CASSIOPEIA'/>
            <GroupIcons/>
        </div>
    );
}

export default Header;