import React, {Component} from 'react';
import Location from '../../Atoms/Location';
import Heading from '../../Atoms/Heading';
import GroupIcons from '../GroupIcons';
import './style.css'

function Header(props) {
    return (
        <div className='header'>
            <div className='container-md'>
                <div className='row'>
                    <div className='col-4'>
                        <Location/>
                    </div>

                    <div className='col-4'>
                        <Heading text = 'CASSIOPEIA'/>
                    </div>

                    <div className='col-4'>
                         <GroupIcons/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;