import React from 'react';
import GroupItem1 from '../../Molecules/GroupItem1';
import GroupItem2 from '../../Molecules/GroupItem2';
import GroupItem3 from '../../Molecules/GroupItem3';
import GroupItem4 from '../../Molecules/GroupItem4';
import './style.css'

function Footer(props) {
    return (
    <div className='footer'>
        <div className='container-md'>
            <div className='row'>
                <div className='col md-3'>
                    <GroupItem1/>
                </div>

                <div className='col md-3'>
                    <GroupItem2/>
                </div>

                <div className='col md-3'>
                    <GroupItem3/>
                </div>

                <div className='col md-3'>
                    <GroupItem4/>
                </div>
            </div>
            <div className='line'></div>
            <div className='copy-right'>© Copyright, 2022</div>
        </div>
    </div>

    );
}

export default Footer;